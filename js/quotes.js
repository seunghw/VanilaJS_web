const quotes = [
  {
    quote: "내일도 할 수 있는 일을 굳이 오늘 할 필요 없다",
    author: "-박명수-",
  },
  {
    quote: "엉망으로 살아야 해! 인생은 한 번이야!",
    author: "-박명수-",
  },
  {
    quote:
      "스스로가 한계라고 생각하는 순간 나 자신만 초라해질 뿐. 그렇기 때문에 언제나 지금 상황이 한계라고 생각하지 않는 것이 중요합니다.",
    author: "-정형돈-",
  },
  {
    quote: "늦었다고 생각할 땐 너무 늦은거다 그러니 지금 당장 시작해라",
    author: "-박명수-",
  },
  {
    quote: "무엇을 선택하느냐보다 선택 이후의 행동이 더 중요하다.",
    author: "-유재석-",
  },
  {
    quote: "원수는 직장에서 만난다.",
    author: "-박명수-",
  },
  {
    quote:
      "지금 여러분들이 하고 싶은 일이 정말 뼛 속까지 하고 싶은 일인가, 본인이 정말 그 일을 좋아한다면 아무리 힘들어도 힘들지 않거든요",
    author: "-노홍철-",
  },
  {
    quote: "앞에서 할 수 없는 말은 뒤에서도 하지 마라",
    author: "-유재석-",
  },
  {
    quote: "목소리의 톤이 높아질수록 뜻은 왜곡된다",
    author: "-유재석-",
  },
  {
    quote: "뭘 무서워 그냥 하는거지. 난관이 이것만 있겠어?",
    author: "-박명수-",
  },
  {
    quote:
      "노력해서 얻는 게 그정도 뿐이라는 걸 예상하지 못했듯 가만히 있는데 예상치 못한 명품 가방이 떨어질지도 모를 일이죠 어차피 이상한 세상인데 한번쯤 낮은 가능성에 기대를 걸어보는 것 이것이 저의 오늘에겐 마땅한 명분입니다",
    author: "-드라마 <멜로가 체질> 중에서-",
  },
  {
    quote:
      "누가봐도 유치한데 그런 유치한 짓을 이렇게 거리낌없이 하며 살아갈 수 있다는게... 그 자신감 나도 빨리 성공해서 유치하게 살고 싶다",
    author: "-드라마 <멜로가 체질> 중에서-",
  },
  {
    quote: "꽃길은 사실 비포장도로다",
    author: "-드라마 <멜로가 체질> 중에서-",
  },
  {
    quote:
      "순류에 역류를 일으킬 때 즉각 반응하는 것은 어리석다. 상대가 역류를 일으켰을 때 나의 순류를 유지하는 것은 상대의 처지에서 보면 역류가 된다. 그러니 나의 흐름을 흔들림 없이 견지하는 자세야말로 최고의 방어 수단이자 공격 수단이 되는 것이다.",
    author: "드라마 <미생> 중에서",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //14개의 명언

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
