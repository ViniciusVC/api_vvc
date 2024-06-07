--Criar tabela produtos:
CREATE TABLE produtos(id INTEGER PRIMARY KEY, nome TEXT, img TEXT, descricao TEXT, grupo TEXT, preco INTEGER);
--Campo preco unidade em centavos.


--Inserir dados na tabela produtos: 

INSERT INTO produtos (nome, img, descricao, grupo, preco) values(
'Processador Intel Core i5 10400', 
'https://img.terabyteshop.com.br/archive/4157291290/processador-intel-core-i5-10gen-04.png',
'Tecnologia Hyper-Threading Intel® (Tecnologia Intel® HT) oferece dois segmentos de processamento por núcleo físico. Aplicativos altamente segmentados podem fazer trabalhos adicionais paralelamente, concluindo as tarefas mais rapidamente.', 
'Eletronicos', 
1010);

INSERT INTO produtos (nome, img, descricao, grupo, preco) values(
'Geladeira Eletroluz',
'https://electrolux.vtexassets.com/arquivos/ids/213950/Refrigerador_TF39S_Frontal_1000x1000-principal.jpg?v=637719959211600000',
'Tenha mais espaço, tecnologia e comodidade na sua cozinha com a Geladeira TF39 Frost Free 310 Litros Platinum. Foi feito para quem não abre mão de um eletrodoméstico moderno e recheado de funcionalidades.',
'Domesticos',
120000);

INSERT INTO produtos (nome, img, descricao, grupo, preco) values(
'Gabinete Gamer RGB KMEX CG-01KB',
'https://policompras.com/image/cache/catalog/Produtos/gab-gamer-a-500x500.PNG',
'Especificações técnicas',
'Eletronicos',
3010);

INSERT INTO produtos (nome, img, descricao, grupo, preco) values(
'Fonte de Alimentação Corsair CX550',
'https://ae01.alicdn.com/kf/Ub98a57c048e3401bbfeb80013a915603p/Fonte-de-alimenta-o-atx-corsair-cx550-550-w-80-bronze.jpg_Q90.jpg_.web',
'Especificações Técnicas...',
'Eletronicos',
4010);

INSERT INTO produtos (nome, img, descricao, grupo, preco) values(
'Forno elétrico',
'https://ae01.alicdn.com/kf/Ub98a57c048e3401bbfeb80013a915603p/Fonte-de-alimenta-o-atx-corsair-cx550-550-w-80-bronze.jpg_Q90.jpg_.webp',
'Forno Eletrico Pfe60i, 60Litros blabl Blabla BLa Bla bla bla Blablablabla…' ,
'Domesticos',
5010);

INSERT INTO produtos (nome, img, descricao, grupo, preco) values(
'SSD SATA WD Green 480GB',
'https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-green-ssd/gallery/240gb/wd-green-ssd-240gb-right.png.thumb.1280.1280.png',
'Para desempenho rápido e confiabilidade, os SSDs WD Green aceleram a experiência de computação em seu PC desktop ou laptop.',
'Eletronicos',
6010);

INSERT INTO produtos (nome, img, descricao, grupo, preco) values(
'Nvidia GeForce RTX3060 12GB',
'https://www.kabum.com.br/conteudo/descricao/164854/img/main-pic.png',
'Tenha um desempenho para seu trabalho e gameplay com a Placa de Vídeo Asus NVIDIA GeForce DUAL RTX 3060 O12G V2 é equipada com uma memória de 12GB GDDR6, Velocidade de Memória de 15 Gbps, e Boost Clock de 1867 MHz em OC e de 1867 MHz no modo Jogo.',
'Eletronicos',
2015);

INSERT INTO produtos (nome, img, descricao, grupo, preco) values(
'Memoria Corsair Vengeance 8GB DDR4 2400MHZ Vermelha',
'https://hotsite.pichau.com.br/descricao/Corsair/CMK16GX4M2A2400C16R/CMK16GX4M2A2400C16R1.png',
'O formato DDR4 é otimizado para os sistemas DDR4 mais recentes e oferece freqüências mais altas, maior largura de banda e menor consumo de energia que os módulos DDR3. VENGEANCE Os módulos LPX DDR4 são testados quanto à compatibilidade nos sistemas DDR4 para um desempenho confiável e rápido.' ,
‘Eletronicos,
5010);
