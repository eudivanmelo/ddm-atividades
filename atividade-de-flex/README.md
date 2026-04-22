# Atividade de Flex

**Flexbox em React Native**  
Disciplina: Desenvolvimento para Dispositivos Móveis

## Enunciado

Cada exercício apresenta um mockup de tela mobile que deve ser reproduzido em um componente React Native.

O objetivo não é apenas o resultado visual, mas também o uso correto das propriedades do Flexbox para obter um layout responsivo.

## Regras

- Todo o layout deve ser construído com Flexbox: `flexDirection`, `justifyContent`, `alignItems`, `flex`, `flexWrap`, `gap`.
- Não é permitido usar `position: 'absolute'` para resolver os layouts principais.
- Evite `width` e `height` fixos em pixels quando puder substituir por `flex` ou porcentagem.
- Organize o código em componente funcional e estilos com `StyleSheet.create`.
- As cores e tamanhos exatos não precisam ser idênticos; o foco é a estrutura do layout.

>**Dica de Ouro:**
>Antes de escrever o código, desenhe quais `View` são containers (pais) e quais são filhos.
>Marque em cada container qual será o `flexDirection`.

## Exercícios

### Exercício 01

Reproduza uma tela com quatro seções empilhadas verticalmente:

- Seção 1: dois botões lado a lado (`Home` e `Perfil`) com a mesma largura.
- Seção 2: card maior com um único bloco interno.
- Seção 3: dois blocos iguais lado a lado.
- Seção 4: card menor com um único bloco interno.

Todas as seções devem ter a mesma largura e respeitar as margens da tela.

### Exercício 02

Reproduza uma tela com quatro seções verticais, cada uma com distribuição diferente no eixo horizontal:

- Seção 1: três círculos (`space-between`), com itens nas bordas e centro.
- Seção 2: três quadrados com espaçamento igual ao redor (`space-around`).
- Seção 3: quatro quadrados alinhados na parte inferior do container.
- Seção 4: dois quadrados centralizados horizontalmente.

### Exercício 03

Reproduza uma tela com três cards iguais empilhados.

Cada card deve ter:

- Parte superior: avatar circular à esquerda e duas linhas de texto à direita (título e subtítulo).
- Parte inferior: botão retangular ocupando toda a largura disponível.

O card deve ser reutilizável e renderizado três vezes.

### Exercício 04

Reproduza uma tela ocupando toda a altura do dispositivo com quatro seções proporcionais:

- Cabeçalho fino no topo.
- Área principal maior (aproximadamente 4x a altura do cabeçalho).
- Linha intermediária com dois cards de mesma largura lado a lado.
- Rodapé fino com altura igual à do cabeçalho.

Nenhuma seção pode ter altura fixa em pixels.

### Exercício 05

Reproduza uma tela com:

- Barra superior com campo de busca arredondado à esquerda (ocupando maior largura) e botão quadrado fixo à direita.
- Grade abaixo com seis cards iguais, em 2 colunas e 3 linhas.

Os cards devem ter a mesma largura, ocupando aproximadamente metade do container, com espaçamento horizontal e vertical.

### Exercício 06

Reproduza uma tela de perfil com quatro blocos verticais:

- Bloco 1: cabeçalho com avatar circular grande centralizado, nome e subtítulo.
- Bloco 2: linha com três pequenos cards distribuídos horizontalmente com espaçamento igual ao redor.
- Bloco 3: dois botões lado a lado dividindo igualmente o espaço.
- Bloco 4: rodapé informativo com duas linhas de texto empilhadas.