export default () => ({
  protocol: process.env.PROTOCOL,
  host: process.env.HOST,
  ports: {
    gateway: process.env.GATEWAY_PORT,
    users: process.env.USERS_PORT,
    auth: process.env.AUTH_PORT,
  },
});
