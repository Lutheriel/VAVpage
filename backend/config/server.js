module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://vav.gta.sk/api',
  admin: {
    url: '/admin',
    auth: {
        secret: 'PetraCoSiNamToSpravila',
    },
  },
});