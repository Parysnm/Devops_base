const request = require('supertest');
const app = require('./app');

describe('Test the app', () => {
  // Test de la route "/"
  test('Get / should return DevOps Labs!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('DevOps Labs!');
  });

  // Test de la route "/name/Bob"
  test('Get /name/Bob should return Hello, Bob!', async () => {
    const response = await request(app).get('/name/Bob');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, Bob!');
  });

  // Test de la désinfection des entrées
  const maliciousUrl = '/name/%3Cscript%3Ealert("hi")%3C%2Fscript%3E';
  const sanitizedHtml = 'Hello, &lt;script&gt;alert(&#34;hi&#34;)&lt;/script&gt;!';

  test('Get /name should sanitize its input', async () => {
    const response = await request(app).get(maliciousUrl);
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(sanitizedHtml);
  });
});


