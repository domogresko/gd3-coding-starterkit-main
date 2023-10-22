  const textContainer = document.querySelector('.text-container');


  const customTextElements = [
      {
          content: 'genesis',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://www.reddit.com/r/Deltarune/comments/tk0pah/dark_worlds_and_its_connections_to_mythology_and/',
          url2: 'https://www.biblegateway.com/passage/?search=genesis+1&version=NIV',
      },
      {
          content: 'exodus',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=Exodus%201&version=NIV',
      },
      {
          content: 'leviticus',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://www.bol.com/nl/nl/f/the-gay-gospels/30557050/',
          url2: 'https://www.biblegateway.com/passage/?search=Leviticus%201&version=NIV',
      },
      {
          content: 'numbers',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=numbers+1&version=NIV'
      },
      {
          content: 'deuteronomy',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://www.reddit.com/r/UkraineRussiaReport/comments/133lhnk/ru_pov_consecration_of_russian_armored_vehicles/',
          url2: 'https://www.biblegateway.com/passage/?search=deuteronomy+1&version=NIV',
      },
      {
          content: 'joshua',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'http://hearingshofar.blogspot.com/2014/10/project-jericho-from-bbc.html',
          url2: 'https://www.biblegateway.com/passage/?search=joshua1&version=NIV',
      },
      {
          content: 'judges',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://www.instagram.com/p/CyCIcldLapf/?img_index=1',
          url2: 'https://www.biblegateway.com/passage/?search=judges+1&version=NIV'
      },
      {
          content: 'ruth',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://www.euronews.com/2018/11/27/alternative-bible-seeks-to-end-submission-of-women-in-holy-text',
          url2: 'https://www.biblegateway.com/passage/?search=Ruth%201&version=NIV'
      },
      {
          content: '1 samuel',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1:'https://www.youtube.com/watch?v=Q3hBLv-HLEc',
          url2: 'https://www.biblegateway.com/passage/?search=1+samuel+1&version=NIV'
      },
      {
          content: '2 samuel',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=2%20Samuel%201&version=NIV'
      },
      {
          content: '1 kings',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=1+kings+1&version=NIV'
      },
      {
          content: '2 kings',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=2+kings+1&version=NIV'
      },
      {
          content: '1 chronicles',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=1+chronicles+1&version=NIV'
      },
      {
          content: '2 chronicles',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=2+chronicles+1&version=NIV'
      },
      {
          content: 'ezra',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://en.wikipedia.org/wiki/LOLCat_Bible_Translation_Project',
          url2: 'https://www.biblegateway.com/passage/?search=ezra+1&version=NIV'
      },
      {
          content: 'nehemiah',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://open.spotify.com/playlist/2NDfhf8VdzppqvQRMF28qu?si=921163969c104e0a',
          url2: 'https://www.biblegateway.com/passage/?search=nehemiah+1&version=NIV',
      },
      {
          content: 'esther',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://exindex.hu/en/event/jelenletem-evidens/',
          url2: 'https://www.biblegateway.com/passage/?search=esther+1&version=NIV',

      },
      {
          content: 'job',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://www.sciencedirect.com/science/article/abs/pii/S0022103116306205',
          url2: 'https://www.biblegateway.com/passage/?search=job+1&version=NIV'
      },
      {
          content: 'psalms',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://mitpress.mit.edu/9781913689216/music-from-elsewhere/',
          url2: 'https://www.biblegateway.com/passage/?search=Psalm%201&version=NIV'
      },
      {
          content: 'proverbs',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1:'https://www.instagram.com/p/CTk0_2ZIQKl/',
          url2:'https://www.biblegateway.com/passage/?search=proverbs+1&version=NIV',
      },
      {
          content: 'ecclesiastes',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=ecclesiastes+1&version=NIV'
      },
      {
          content: 'the song of solomon',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://stedelijkstudies.com/journal/niki-de-saint-phalle-playing-with-the-feminine-in-the-male-factory-hon-en-katedral/',
          url2: 'https://www.biblegateway.com/passage/?search=Song%20of%20Songs%201&version=NIV',
      },
      {
          content: 'isaiah',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=Isaiah%201&version=NIV'
      },
      {
          content: 'jeremiah',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=jeremiah+1&version=NIV'
      },
      {
          content: 'lamentations',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=lamentations+1&version=NIV'
      },
      {
          content: 'ezekiel',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=ezekiel+1&version=NIV'
      },
      {
          content: 'daniel',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://the-take.com/read/are-the-biblical-references-in-men-and-chicken-intentional-what-do-they-mean',
          url2: 'https://www.biblegateway.com/passage/?search=daniel+1&version=NIV',
      },
      {
          content: 'hosea',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=hosea+1&version=NIV'
      },
      {
          content: 'joel',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=joel+1&version=NIV'
      },
      {
          content: 'amos',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://instrumentinventors.org/post/phantom-limb-amos-peled/',
          url2: 'https://www.biblegateway.com/passage/?search=amos+1&version=NIV',
      },
      {
          content: 'obadiah',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=obadiah+1&version=NIV'
      },
      {
          content: 'jonah',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=jonah+1&version=NIV',
      },
      {
          content: 'micah',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=micah+1&version=NIV'
      },
      {
          content: 'nahum',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=nahum+1&version=NIV'
      },
      {
          content: 'habakkuk',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=habakkuk+1&version=NIV'
      },
      {
          content: 'zephaniah',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=zephaniah+1&version=NIV'
      },
      {
          content: 'haggai',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=haggai+1&version=NIV'
      },
      {
          content: 'zechariah',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=zechariah+1&version=NIV'
      },
      {
          content: 'malachi',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=malachi+1&version=NIV'
      },
      {
          content: 'matthew',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=matthew+1&version=NIV'
      },
      {
          content: 'mark',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url: 'https://www.thetrendspotter.net/jesus-tattoos/',
          url2: 'https://www.biblegateway.com/passage/?search=mark+1&version=NIV',
      },
      {
          content: 'luke',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://www.flickr.com/photos/slworking/3060164715',
          url2: 'https://www.biblegateway.com/passage/?search=luke+1&version=NIV'
      },
      {
          content: 'john',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://genius.com/albums/Kanye-west/Jesus-is-king',
          url2: 'https://www.biblegateway.com/passage/?search=john+1&version=NIV',
      },
      {
          content: 'acts',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://www.facebook.com/photo.php?fbid=298407056273308&id=100083120477437&set=a.164493242998024&locale=sq_AL',
          url2: 'https://www.biblegateway.com/passage/?search=acts+1&version=NIV'
      },
      {
          content: 'romans',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          ur1l: 'https://www.youtube.com/watch?v=vpHhPdYYo6U',
          url2: 'https://www.biblegateway.com/passage/?search=romans+1&version=NIV',
      },
      {
          content: '1 corinthians',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=1+corinthians+1&version=NIV'
      },
      {
          content: '2 corinthians',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=2+corinthians+1&version=NIV'
      },
      {
          content: 'galatians',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://ejtech.studio/ALL-DIRECTION-IS-CURVED-ALL-MOTION-IS-SPIRAL',
          url2: 'https://www.biblegateway.com/passage/?search=galatians+1&version=NIV',
      },
      {
          content: 'ephesians',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=ephesians+1&version=NIV'
      },
      {
          content: 'philippians',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=philippians+1&version=NIV'
      },
      {
          content: 'colossians',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=colossians+1&version=NIV'
      },
      {
          content: '1 thessalonians',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=1+thessalonians+1&version=NIV'
      },
      {
          content: '2 thessalonians',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=2+thessalonians+1&version=NIV'
      },
      {
          content: '1 timothy',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=1+timothy+1&version=NIV'
      },
      {
          content: '2 timothy',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=2+timothy+1&version=NIV'
      },
      {
          content: 'titus',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=titus+1&version=NIV'
      },
      {
          content: 'philemon',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://www.youtube.com/watch?v=mMRrCYPxD0I',
          url2: 'https://www.biblegateway.com/passage/?search=philemon+1&version=NIV',
      },
      {
          content: 'hebrews',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=hebrews+1&version=NIV'
      },
      {
          content: 'james',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://jamieleetaete.com/',
          url2: 'https://www.biblegateway.com/passage/?search=james+1&version=NIV',
      },
      {
          content: '1 peter',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=1+peter+1&version=NIV'
      },
      {
          content: '2 peter',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=2+peter+1&version=NIV'
      },
      {
          content: '1 john',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=1+john+1&version=NIV'
      },
      {
          content: '2 john',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=2+john+1&version=NIV'
      },
      {
          content: '3 john',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: '',
          url2: 'https://www.biblegateway.com/passage/?search=3+john+1&version=NIV'
      },
      {
          content: 'jude',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://www.webcamtaxi.com/en/church.html',
          url2: 'https://www.biblegateway.com/passage/?search=jude+1&version=NIV',
      },
      {
          content: 'revelation',
          color: '#4e471e',
          fontSize: '20px',
          rotation: Math.random(),
          url1: 'https://barnabasbacsi.com/project/the-event/',
          url2: 'https://www.biblegateway.com/passage/?search=revelation+1&version=NIV',
      },
  ];

  
      const svgFiles = [
          'bookbg.svg',
      ];



  function createCustomText(textElement) {

      const text = document.createElement('div');
      text.classList.add('text');
      text.textContent = textElement.content;
      text.style.color = textElement.color;
      text.style.fontSize = textElement.fontSize;
      text.style.transform = `rotate(${textElement.rotation}deg)`;
      text.style.transition = 'transform 0.2s, font-size 0.2s';

      text.style.left = `${Math.random() * 90}vw`;
      text.style.top = `${Math.random() * 90}vh`;
      text.style.color = textElement.color;
      text.style.fontSize = textElement.fontSize;

      text.addEventListener('mouseenter', () => {
          shuffleText(text);
      });
      text.addEventListener('mouseleave', () => {
          restoreOriginalText(text);
      });

      text.addEventListener('click', () => {
          window.open(textElement.url1, '_blank');
      });
      text.addEventListener('click', () => {
          window.open(textElement.url2, '_blank');
      });

      textContainer.appendChild(text);
  }



function shuffleText(textElement) {
      const text = textElement.textContent;
      const shuffledText = shuffleString(text);
      textElement.textContent = shuffledText;
  }

  function restoreOriginalText(textElement) {
      textElement.textContent = customTextElements.find(elem => elem.content === textElement.textContent).content;
  }


  function shuffleString(str) {
      const array = str.split('');
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array.join('');
  }


  customTextElements.forEach(createCustomText);


  const cross = document.querySelector('.cross');
      const crossHeight = cross.clientHeight;

      
      document.body.style.height = `${crossHeight}px`;
      textContainer.style.height = `${crossHeight}px`;
