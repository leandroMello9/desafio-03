module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  username: 'postgres',
  passowrd: 'docker',
  database: 'gympoint',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
