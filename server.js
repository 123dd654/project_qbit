const express = require('express');
const next = require('next');
const http = require('http');
const socketIo = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
const port = 80;

// HTTP 서버 생성
const httpServer = http.createServer(server);
const io = socketIo(httpServer);

const connectedClients = {};
const clientBags = {};

app.prepare().then(() => {
  server.use(express.json());

  server.get('/', (req, res) => {
    return app.render(req, res, '/');
  });

  server.post('/data', (req, res) => {
    const data = req.body;
    res.json({
      message: 'Data received successfully',
      receivedData: data
    });
  });

  // Handle all other Next.js page requests
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  io.on('connection', (socket) => {
    console.log('a user connected');
    connectedClients[socket.id] = socket;

    io.emit('viewers', Object.keys(connectedClients).length);
    io.emit('otherBags', Object.values(clientBags));

    // ✅ 기존 장바구니 업데이트
    socket.on('updateBag', (updatedBag) => {
      clientBags[socket.id] = updatedBag;
      // 기존 코드 유지
      socket.broadcast.emit('otherBags', Object.values(clientBags));
    });

    // ✅ 주문하기 이벤트 추가
    socket.on('placeOrder', () => {
      console.log("📦 placeOrder received from", socket.id);

      const orderSnapshot = {
        myBag: clientBags[socket.id] || { items: [] },
        otherBags: Object.entries(clientBags)
          .filter(([id]) => id !== socket.id)
          .map(([_, bag]) => bag),
      };

      console.log("📦 orderSnapshot", orderSnapshot);

      // 주문 완료 이벤트 브로드캐스트
      io.emit('orderPlaced', orderSnapshot);

      // 주문 후 자기 장바구니 초기화
      clientBags[socket.id] = { items: [] };

      // 최신 장바구니 상태 다시 공유
      io.emit('otherBags', Object.values(clientBags));
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
      delete connectedClients[socket.id];
      delete clientBags[socket.id];
      io.emit('viewers', Object.keys(connectedClients).length);
      io.emit('otherBags', Object.values(clientBags));
    });
  });

  httpServer.listen(port, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`Server running at port:${port}`);
  });
});
