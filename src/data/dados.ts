import Cliente from '../models/Clientes';
import CPF from '../models//CPF';
import RG from '../models//RG';
import Telefone from '../models/Telefone';
import Produto from '../models/Produto';
import Servico from '../models/Servico';


// Produtos
export const produtos: Produto[] = [
  new Produto('0', 'Sérum Facial Antioxidante com Vitamina C', 'Sérum concentrado para iluminar a pele e combater radicais livres', '95.00'),
  new Produto('1', 'Shampoo Hidratante', 'Shampoo de hidratação intensa para todos os tipos de cabelo', '52.90'),
  new Produto('2', 'Condicionador Nutritivo', 'Condicionador nutritivo para cabelos secos e danificados', '60.00'),
  new Produto('3', 'Máscara Capilar Reparadora', 'Máscara de tratamento profundo para reparação capilar', '50.00'),
  new Produto('4', 'Gel Calmante Pós-Barba e Pós-Depilação', 'Gel calmante para aliviar irritações pós-barba e pós-depilação', '45.00'),
  new Produto('5', 'Gel de Limpeza Facial Equilibrante', 'Gel de limpeza facial para controlar a oleosidade e equilibrar a pele', '100.00'),
  new Produto('6', 'Água Micelar Purificante', 'Água micelar purificante para remover maquiagem e impurezas', '30.00'),
  new Produto('7', 'Hidratante Labial com Manteiga de Karité', 'Hidratante labial com manteiga de karité para lábios ressecados', '20.00'),
  new Produto('8', 'Sérum Capilar Anti-Frizz', 'Sérum capilar para controlar o frizz e dar brilho aos cabelos', '45.90'),
  new Produto('9', 'Creme Revitalizante Noturno', 'Creme noturno para revitalização e hidratação profunda da pele', '50.00'),
  new Produto('10', 'Esfoliante Facial Suave', 'Esfoliante facial suave para renovação celular e pele luminosa', '40.00'),
  new Produto('11', 'Protetor Solar Facial FPS 50', 'Protetor solar facial de alta proteção contra raios UVA/UVB', '75.00'),
  new Produto('12', 'Loção Hidratante Corporal Masculina', 'Loção hidratante corporal leve e de rápida absorção para homens', '35.00'),
  new Produto('13', 'Creme para Barbear Suave', 'Creme para barbear que proporciona um barbear rente e confortável', '28.00'),
  new Produto('14', 'Bálsamo Pós-Barba Revigorante', 'Bálsamo pós-barba para acalmar e revigorar a pele masculina', '38.00'),
  new Produto('15', 'Óleo Corporal Hidratante', 'Óleo corporal nutritivo para hidratação intensa e pele macia', '55.00'),
  new Produto('16', 'Tônico Facial Adstringente', 'Tônico facial adstringente para peles oleosas e com acne', '42.00'),
  new Produto('17', 'Creme para Mãos Reparador', 'Creme para mãos com ação reparadora e hidratante', '25.00'),
  new Produto('18', 'Máscara Facial de Argila Detox', 'Máscara facial de argila para desintoxicação e purificação da pele', '65.00'),
  new Produto('19', 'Desodorante Antitranspirante Roll-on', 'Desodorante antitranspirante de longa duração para proteção eficaz', '18.00'),
  new Produto('20', 'Sabonete Líquido Corporal Refrescante', 'Sabonete líquido corporal com fragrância refrescante para o banho', '32.00'),
];

export const servicos: Servico[] = [
  new Servico('0', 'Design de Barba com Navalha', 'Modelagem precisa da barba com uso de navalha para contornos definidos', '50.00'),
  new Servico('1', 'Corte Feminino', 'Corte com escova e finalização, ideal para um novo visual', '80.00'),
  new Servico('2', 'Coloração Global', 'Coloração completa com tratamento pós-química para brilho e durabilidade', '150.00'),
  new Servico('3', 'Escova Progressiva', 'Alisamento com queratina, redução de volume e frizz com efeito duradouro', '220.00'),
  new Servico('4', 'Corte Masculino', 'Corte tradicional ou moderno, incluindo lavagem e finalização', '40.00'),
  new Servico('5', 'Barba Terapêutica', 'Modelagem da barba com toalha quente, massagem e produtos específicos', '60.00'),
  new Servico('6', 'Hidratação Capilar Profunda', 'Tratamento intensivo para cabelos secos e danificados, com máscara nutritiva', '75.00'),
  new Servico('7', 'Mechas ou Luzes', 'Criação de pontos de luz no cabelo para um visual iluminado e natural', '180.00'),
  new Servico('8', 'Manicure Completa', 'Corte, lixamento, cutilagem e esmaltação das unhas das mãos', '35.00'),
  new Servico('9', 'Pedicure Completa', 'Corte, lixamento, cutilagem e esmaltação das unhas dos pés', '40.00'),
  new Servico('10', 'Design de Sobrancelhas', 'Modelagem das sobrancelhas para harmonizar com o formato do rosto', '25.00'),
  new Servico('11', 'Limpeza de Pele Facial', 'Remoção de impurezas, cravos e espinhas, com hidratação e máscara calmante', '95.00'),
  new Servico('12', 'Massagem Relaxante', 'Massagem corporal completa para aliviar tensões e promover bem-estar', '120.00'),
  new Servico('13', 'Maquiagem Profissional', 'Maquiagem para eventos sociais, festas ou sessões de fotos', '110.00'),
  new Servico('14', 'Penteado para Eventos', 'Penteados elaborados para ocasiões especiais, como coques, tranças e semipresos', '90.00'),
  new Servico('15', 'Podologia', 'Tratamento e prevenção de problemas nos pés, como calos e unhas encravadas', '70.00'),
  new Servico('16', 'Depilação Completa (Feminina)', 'Depilação com cera para pernas, virilha e axilas', '85.00'),
  new Servico('17', 'Depilação Masculina (Torso e Costas)', 'Depilação com cera para áreas do torso e costas masculinas', '95.00'),
  new Servico('18', 'Reflexologia Podal', 'Massagem nos pés com foco em pontos de pressão para alívio e relaxamento', '60.00'),
  new Servico('19', 'Tratamento Capilar Antiqueda', 'Tratamento específico para fortalecer os fios e reduzir a queda de cabelo', '130.00'),
  new Servico('20', 'Dia da Noiva/Noivo', 'Pacote completo de beleza e relaxamento para o dia do casamento', '400.00'),
];


// Clientes
export const clientes: Cliente[] = [
  new Cliente('RK800', 'Connor', 'M', new CPF('11005678707', new Date('2025-02-01')), new RG('112233445', new Date('2025-05-10')), new Telefone('10', '980776800'), new Date('2025-10-01')),
  new Cliente('AX400', 'Kara', 'F', new CPF('11005678707', new Date('2025-08-01')), new RG('112233445', new Date('2025-01-10')), new Telefone('10', '980776400'), new Date('2025-10-02')),
  new Cliente('RK200', 'Markus', 'M', new CPF('11005678707', new Date('2025-05-01')), new RG('112233445', new Date('2025-01-05')), new Telefone('10', '980776200'), new Date('2025-10-03')),
  new Cliente('Carl Manfred', 'Carl', 'M', new CPF('12345678900', new Date('1960-08-01')), new RG('112233445', new Date('1961-05-10')), new Telefone('12', '988776655'), new Date('2022-08-01')),
  new Cliente('Zlatko Andronikov', 'Zlatko', 'M', new CPF('12345678900', new Date('2012-01-08')), new RG('112233445', new Date('2010-05-10')), new Telefone('11', '988886605'), new Date('2023-08-04')),
  new Cliente('Elijah Kamski', 'Elijah', 'M', new CPF('12345678707', new Date('2000-01-01')), new RG('112233445', new Date('2000-05-10')), new Telefone('12', '980776655'), new Date('2024-08-01')),
  new Cliente('Rose Chapman', 'Rose', 'F', new CPF('12345678707', new Date('2007-05-01')), new RG('112233445', new Date('2007-05-11')), new Telefone('12', '980700655'), new Date('2020-09-01')),
  new Cliente('Emma Phillips', 'Emma', 'F', new CPF('11345678707', new Date('2023-02-01')), new RG('112233445', new Date('2023-05-10')), new Telefone('11', '980776655'), new Date('2025-08-01')),
  new Cliente('Jimmy Peterson', 'Jimmy', 'M', new CPF('11045678707', new Date('2002-05-01')), new RG('114243445', new Date('2002-10-10')), new Telefone('11', '990776655'), new Date('2025-09-01')),
  new Cliente('Amanda Stern', 'Amanda', 'F', new CPF('81005678707', new Date('1992-02-01')), new RG('112233445', new Date('1992-05-10')), new Telefone('11', '986676655'), new Date('2008-08-01')),
  new Cliente('Hank Anderson', 'Hank', 'M', new CPF('71345678707', new Date('1998-02-11')), new RG('112233445', new Date('1998-02-11')), new Telefone('11', '980976655'), new Date('2000-08-01')),
  new Cliente('WR400', 'North', 'F', new CPF('11345678707', new Date('2025-02-01')), new RG('112233445', new Date('2025-05-10')), new Telefone('10', '9807766400'), new Date('2025-10-04')),
  new Cliente('WR400', 'Blue Haired Traci', 'F', new CPF('21005678701', new Date('2020-02-01')), new RG('223456789', new Date('2025-03-15')), new Telefone('11', '987654400'), new Date('2022-05-10')),
  new Cliente('Todd Williams', 'Todd', 'M', new CPF('21005678701', new Date('2020-02-01')), new RG('223456789', new Date('2020-03-15')), new Telefone('11', '987654321'), new Date('2022-05-10')),
  new Cliente('Simon Grey', 'Simon', 'M', new CPF('21005678702', new Date('2015-05-10')), new RG('323456789', new Date('2014-11-20')), new Telefone('12', '998877665'), new Date('2023-01-12')),
  new Cliente('TR400', 'Luther', 'M', new CPF('21005678703', new Date('2012-03-03')), new RG('423456789', new Date('2012-04-04')), new Telefone('13', '976543210'), new Date('2021-04-03')),
  new Cliente('Daniel', 'Daniel', 'M', new CPF('21005678704', new Date('2019-02-02')), new RG('523456789', new Date('2018-06-06')), new Telefone('14', '965432109'), new Date('2021-09-10')),
  new Cliente('Gavin Reed', 'Gavin', 'M', new CPF('21005678705', new Date('2018-12-12')), new RG('623456789', new Date('2017-07-07')), new Telefone('15', '954321098'), new Date('2022-03-05')),
  new Cliente('RK900', 'Nines', 'M', new CPF('21005678706', new Date('2025-01-01')), new RG('723456789', new Date('2025-02-02')), new Telefone('16', '943210987'), new Date('2025-05-01')),
  new Cliente('YK500', 'Alice', 'F', new CPF('21005678707', new Date('2021-06-06')), new RG('823456789', new Date('2021-06-07')), new Telefone('17', '932109876'), new Date('2022-08-01')),
  new Cliente('Leo Manfred', 'Leo', 'M', new CPF('21005678708', new Date('2005-03-03')), new RG('923456789', new Date('2005-03-04')), new Telefone('18', '921098765'), new Date('2023-04-09')),
  new Cliente('Detective Miller', 'Miller', 'M', new CPF('21005678709', new Date('1998-05-05')), new RG('101010101', new Date('1999-01-01')), new Telefone('19', '910987654'), new Date('2020-02-20')),
  new Cliente('Sofia Lane', 'Sofia', 'F', new CPF('21005678710', new Date('2011-09-09')), new RG('202020202', new Date('2012-02-02')), new Telefone('20', '909876543'), new Date('2023-07-10')),
  new Cliente('Victor Klein', 'Victor', 'M', new CPF('21005678711', new Date('2003-11-11')), new RG('303030303', new Date('2004-04-04')), new Telefone('21', '898765432'), new Date('2021-11-11')),
  new Cliente('RT600', 'Chloe', 'F', new CPF('21005678712', new Date('2023-03-03')), new RG('404040404', new Date('2023-03-04')), new Telefone('22', '887654321'), new Date('2024-02-20')),
  new Cliente('Reed Novak', 'Reed', 'M', new CPF('21005678713', new Date('2017-07-07')), new RG('505050505', new Date('2017-07-08')), new Telefone('23', '876543210'), new Date('2022-06-06')),
  new Cliente('Elena Faber', 'Elena', 'F', new CPF('21005678714', new Date('2010-08-08')), new RG('606060606', new Date('2010-08-09')), new Telefone('24', '865432109'), new Date('2021-10-15')),
  new Cliente('Ben Carter', 'Ben', 'M', new CPF('21005678715', new Date('2019-01-01')), new RG('707070707', new Date('2019-01-02')), new Telefone('25', '854321098'), new Date('2023-05-05')),
  new Cliente('Maya Grant', 'Maya', 'F', new CPF('21005678716', new Date('2020-10-10')), new RG('808080808', new Date('2020-10-11')), new Telefone('26', '843210987'), new Date('2023-09-01')),
  new Cliente('Derek Fox', 'Derek', 'M', new CPF('21005678717', new Date('2022-04-04')), new RG('909090909', new Date('2022-04-05')), new Telefone('27', '832109876'), new Date('2024-01-01')),
  new Cliente('Laura Bennett', 'Laura', 'F', new CPF('21005678718', new Date('2021-02-02')), new RG('111222333', new Date('2021-02-03')), new Telefone('28', '821098765'), new Date('2023-10-10'))
];

// Exemplo: adicionando produtos e serviços consumidos
clientes[0].consumirProduto(produtos[0]);
clientes[0].consumirProduto(produtos[1]);
clientes[9].consumirServico(servicos[4]);
clientes[1].consumirProduto(produtos[2]);
clientes[1].consumirServico(servicos[1]);
clientes[1].consumirServico(servicos[2]);
clientes[5].consumirProduto(produtos[1]);
clientes[2].consumirProduto(produtos[2]);
clientes[2].consumirServico(servicos[0]);
clientes[13].consumirProduto(produtos[0]);
clientes[14].consumirServico(servicos[10]);
clientes[15].consumirProduto(produtos[2]);
clientes[10].consumirServico(servicos[0]);
clientes[16].consumirProduto(produtos[1]);
clientes[17].consumirServico(servicos[2]);
clientes[18].consumirProduto(produtos[19]);
clientes[10].consumirServico(servicos[1]);
clientes[19].consumirServico(servicos[6]);
clientes[20].consumirProduto(produtos[0]);
clientes[21].consumirProduto(produtos[1]);
clientes[21].consumirServico(servicos[2]);
clientes[22].consumirProduto(produtos[2]);
clientes[22].consumirServico(servicos[2]);
clientes[23].consumirServico(servicos[1]);
clientes[24].consumirProduto(produtos[0]);
clientes[24].consumirProduto(produtos[1]);
clientes[25].consumirProduto(produtos[2]);
clientes[26].consumirServico(servicos[2]);
clientes[27].consumirProduto(produtos[1]);
clientes[28].consumirServico(servicos[0]);
clientes[29].consumirProduto(produtos[0]);
clientes[0].consumirProduto(produtos[0]);
clientes[0].consumirProduto(produtos[1]);
clientes[0].consumirServico(servicos[0]);
clientes[1].consumirProduto(produtos[2]);
clientes[1].consumirServico(servicos[1]);
clientes[1].consumirServico(servicos[2]);
clientes[2].consumirProduto(produtos[1]);
clientes[2].consumirProduto(produtos[7]);
clientes[2].consumirServico(servicos[0]);
clientes[3].consumirServico(servicos[1]);
clientes[4].consumirProduto(produtos[0]);
clientes[5].consumirProduto(produtos[1]);
clientes[5].consumirServico(servicos[2]);
clientes[6].consumirProduto(produtos[2]);
clientes[6].consumirServico(servicos[0]);
clientes[7].consumirProduto(produtos[5]);
clientes[7].consumirServico(servicos[11]);
clientes[8].consumirProduto(produtos[1]);
clientes[8].consumirServico(servicos[2]);
clientes[9].consumirServico(servicos[0]);
clientes[10].consumirProduto(produtos[0]);
clientes[10].consumirServico(servicos[2]);
clientes[11].consumirProduto(produtos[20]);
clientes[11].consumirServico(servicos[1]);
clientes[12].consumirProduto(produtos[1]);
clientes[13].consumirServico(servicos[12]);
clientes[14].consumirProduto(produtos[20]);
clientes[14].consumirProduto(produtos[2]);
clientes[15].consumirServico(servicos[0]);
clientes[16].consumirProduto(produtos[1]);
clientes[16].consumirServico(servicos[1]);
clientes[17].consumirProduto(produtos[0]);
clientes[18].consumirProduto(produtos[1]);
clientes[18].consumirServico(servicos[2]);
clientes[19].consumirServico(servicos[20]);
clientes[20].consumirProduto(produtos[2]);
clientes[21].consumirProduto(produtos[0]);
clientes[21].consumirProduto(produtos[1]);
clientes[21].consumirServico(servicos[11]);
clientes[22].consumirServico(servicos[2]);
clientes[23].consumirProduto(produtos[1]);
clientes[24].consumirProduto(produtos[2]);
clientes[24].consumirServico(servicos[0]);
clientes[25].consumirProduto(produtos[0]);
clientes[25].consumirServico(servicos[22]);
clientes[26].consumirProduto(produtos[17]);
clientes[27].consumirProduto(produtos[2]);
clientes[28].consumirProduto(produtos[1]);
clientes[28].consumirServico(servicos[1]);
clientes[29].consumirProduto(produtos[20]);
clientes[29].consumirServico(servicos[20]);


