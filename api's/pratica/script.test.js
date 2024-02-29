//testes
const consumo = require('./script')

test('consumo de gasolina andando 160km seja 10 litros', () => {
   expect(consumo.consumo(160, 'gasolina')).toBe(10);
 });

 test('consumo de etanol andando 110km seja de 10 litros', () => {
   expect(consumo.consumo(110, 'etanol')).toBe(10)
 })

 test('distancia negativa dê um resultado nulo', () => {
   expect(consumo.consumo(-10, 'etanol')).toBe(null)
 })

 test('distancia negativa dê um resultado nulo', () => {
   expect(consumo.consumo(-10, 'gasolina')).toBe(null)
 })