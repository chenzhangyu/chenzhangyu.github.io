// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-services",
          title: "services",
          description: "Professional Services",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Invited Talks and Presentations",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-honors",
          title: "honors",
          description: "Awards and Honors",
          section: "Navigation",
          handler: () => {
            window.location.href = "/honors/";
          },
        },{id: "news-our-paper-rolex-won-the-best-paper-award-at-fast-2023",
          title: 'Our paper ROLEX won the Best Paper Award at FAST 2023! 🏆',
          description: "",
          section: "News",},{id: "news-our-paper-gphash-has-been-accepted-by-fast-2025",
          title: 'Our paper GPHash has been accepted by FAST 2025!',
          description: "",
          section: "News",},{id: "news-our-paper-on-fail-slow-hardware-failure-bugs-received-best-paper-award-nomination-at-usenix-atc-2025",
          title: 'Our paper on fail-slow hardware failure bugs received Best Paper Award Nomination at...',
          description: "",
          section: "News",},{id: "news-our-paper-dualmap-enabling-both-cache-affinity-and-load-balancing-for-distributed-llm-serving-has-been-accepted-by-iclr-2026",
          title: 'Our paper DualMap (Enabling Both Cache Affinity and Load Balancing for Distributed LLM...',
          description: "",
          section: "News",},{id: "news-our-paper-tilesparse-arithmetic-intensity-aware-sparse-attention-for-compute-bound-llm-decoding-has-been-accepted-by-icml-2026",
          title: 'Our paper TileSparse (Arithmetic-Intensity-Aware Sparse Attention for Compute-Bound LLM Decoding) has been accepted...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%73.%7A%79%63%68%65%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'Github',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },];
