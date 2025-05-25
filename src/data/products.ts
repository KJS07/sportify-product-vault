
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  quantity: number;
}

export const products: Product[] = [
  // Cricket Equipment
  {
    id: 1,
    name: "Professional Cricket Bat",
    price: 7470,
    originalPrice: 9960,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhLPnRHhcddDNOHM7D1aDyUPtNHli6UptpQ&s",
    category: "Cricket",
    rating: 4.8,
    inStock: true,
    quantity: 15
  },
  {
    id: 2,
    name: "Cricket Ball - Leather",
    price: 2075,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/357220454/RJ/ZC/CR/2100883/ss-cr-world-4-pcs-cricket-balls-500x500.jpg",
    category: "Cricket",
    rating: 4.6,
    inStock: true,
    quantity: 42
  },
  {
    id: 3,
    name: "Batting Pads",
    price: 3815,
    image: "https://5.imimg.com/data5/UF/PQ/MY-24100650/white-cricket-batting-pads.png",
    category: "Cricket",
    rating: 4.5,
    inStock: true,
    quantity: 23
  },
  {
    id: 4,
    name: "Batting Gloves",
    price: 2490,
    image: "https://setsons.in/cdn/shop/products/Picture5_508d84ba-f388-4d40-89ca-ed6e1b4dd983.png?v=1632172820",
    category: "Cricket",
    rating: 4.7,
    inStock: true,
    quantity: 31
  },
  {
    id: 5,
    name: "Cricket Helmet",
    price: 6640,
    originalPrice: 8300,
    image: "https://cdnmedia.dsc-cricket.com/media/catalog/product/cache/6d9f53a3f26f3a62c1c1c9add7c6ad94/g/u/guard-cricket-helmet-navy-3_2.jpg",
    category: "Cricket",
    rating: 4.8,
    inStock: true,
    quantity: 18
  },
  {
    id: 6,
    name: "Wicketkeeping Gloves",
    price: 3320,
    image: "https://m.media-amazon.com/images/I/61lzLIZQaOL._AC_UF894,1000_QL80_.jpg",
    category: "Cricket",
    rating: 4.6,
    inStock: true,
    quantity: 26
  },
  {
    id: 7,
    name: "Stumps and Bails Set",
    price: 2905,
    image: "https://chanak.co/cdn/shop/files/AT1711.png?v=1709210838",
    category: "Cricket",
    rating: 4.4,
    inStock: true,
    quantity: 12
  },
  {
    id: 8,
    name: "Abdominal Guard (Box)",
    price: 1660,
    image: "https://cricketershop.com/cdn/shop/files/Test-1__54383__89465.1570004436.386.513.jpg?v=1721644390",
    category: "Cricket",
    rating: 4.3,
    inStock: true,
    quantity: 35
  },

  // Football (Soccer) Equipment
  {
    id: 9,
    name: "FIFA Quality Soccer Ball",
    price: 4150,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1OJ0PcJd32RzjTQ7inlkIdZNlVZXbQurxygvJuA1TrED0lAPLVPV5u8DVPFj2Ezg1MJDxBwONoB_JZspZAb_9KBbWHCi7K4326zcx22Py4J5EDYLs-USrRA",
    category: "Soccer",
    rating: 4.8,
    inStock: true,
    quantity: 28
  },
  {
    id: 10,
    name: "Football Boots (Cleats)",
    price: 7470,
    originalPrice: 9960,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSSTIKGKXU1h_slm7K8-FhQyF6nZbu8TsbfDYKXIWgjFfOrxGflfuIKpXDEq0rsVheOJoZc-f_MyZMwbbY9eiNt9qAVzG3mGX_aMgVtOYw8CNc2ydELmfOsVw",
    category: "Soccer",
    rating: 4.7,
    inStock: true,
    quantity: 19
  },
  {
    id: 11,
    name: "Shin Guards",
    price: 2075,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRiTVlwtV80g6RNG4iQB_IT1mmHacU51vAjhJiGK7QPfBn1q0y8EgQHHIqpodRhHqMmfU4y4Z1pQ4D5sehFtgLaxqyZpHuWizTB22DBUuUB_V4r4TqJH2DGyQ",
    category: "Soccer",
    rating: 4.5,
    inStock: true,
    quantity: 37
  },
  {
    id: 12,
    name: "Goalkeeper Gloves",
    price: 3320,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOMs68JmuTdWgYqAkhUFs6mDLOYEu1PorN-IvAHxA8nSwNjXq0-pLmrOctPDTLAMm3qklpFD4Eh_Xflv39_pTEm4aRzRr2fQnYeTIIUjZ-UPU7C-584Xd1LQ",
    category: "Soccer",
    rating: 4.6,
    inStock: true,
    quantity: 22
  },
  {
    id: 13,
    name: "Goalposts and Net Set",
    price: 16600,
    originalPrice: 20750,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR27i5jRGKDr1HAp9GKdqNrFWRKKbw718jmpob67haXfS8opIL_9v8vJ3UH_b2G1z0Lhl3Wr2H8cthhAURpar4BACA8bAOCdgJ9YoZRVz9NgHEna0t_RzWRKQ",
    category: "Soccer",
    rating: 4.7,
    inStock: true,
    quantity: 8
  },
  {
    id: 14,
    name: "Training Cones Set",
    price: 1660,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSYGZMQjxGOUSMxoF6FVGyCYhLVqd13yxj7iVElTFuP1DpSSncFheQGeoMdCtwvYCRTneno4sgGxLx10XEsqLAJSjv3cU6bPJJkwQEUZRtd_BsaprY3Tv0G36NmXcGZKJ-uh3MJDA&usqp=CAc",
    category: "Soccer",
    rating: 4.4,
    inStock: true,
    quantity: 45
  },
  {
    id: 15,
    name: "Corner Flags",
    price: 2490,
    image: "https://images-cdn.ubuy.co.in/65e46f72c86ec3749b0dc4e3-forza-soccer-corner-flags-set-of-4.jpg",
    category: "Soccer",
    rating: 4.3,
    inStock: true,
    quantity: 33
  },
  {
    id: 16,
    name: "Jersey and Shorts Kit",
    price: 4565,
    originalPrice: 5810,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGF1D8hehaBLAHTXaFQr80GEg3aazH5RbCeA&s",
    category: "Soccer",
    rating: 4.6,
    inStock: true,
    quantity: 29
  },

  // Hockey Equipment
  {
    id: 17,
    name: "Field Hockey Stick",
    price: 6640,
    image: "https://stx.com/cdn/shop/files/stx-fh-24-rx101-blackblue_1.jpg?v=1725285450&width=823",
    category: "Hockey",
    rating: 4.7,
    inStock: true,
    quantity: 16
  },
  {
    id: 18,
    name: "Hockey Ball",
    price: 1245,
    image: "https://nwscdn.com/media/wysiwyg/2022/training-hockey-balls-USP3.jpeg",
    category: "Hockey",
    rating: 4.5,
    inStock: true,
    quantity: 52
  },
  {
    id: 19,
    name: "Hockey Shin Pads",
    price: 2905,
    image: "https://www.alfahockey.in/wp-content/uploads/2020/01/shinguard-white-A.jpg",
    category: "Hockey",
    rating: 4.6,
    inStock: true,
    quantity: 24
  },
  {
    id: 20,
    name: "Mouth Guard",
    price: 1080,
    image: "https://m.media-amazon.com/images/I/41dVG0V7pxL._AC_UF1000,1000_QL80_.jpg",
    category: "Hockey",
    rating: 4.4,
    inStock: true,
    quantity: 67
  },
  {
    id: 21,
    name: "Goalkeeper Kit Complete",
    price: 24900,
    originalPrice: 33200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv54fwzpt7C7T5VTRPjJrI9ABFbusLPOoILg&s",
    category: "Hockey",
    rating: 4.8,
    inStock: true,
    quantity: 5
  },
  {
    id: 22,
    name: "Hockey Shoes",
    price: 5810,
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/r/u/d/-original-imah5xteca3mr2wa.jpeg?q=90&crop=false",
    category: "Hockey",
    rating: 4.5,
    inStock: true,
    quantity: 21
  },
  {
    id: 23,
    name: "Protective Cup",
    price: 1575,
    image: "https://m.media-amazon.com/images/I/41LfodKrULL._AC_UF894,1000_QL80_.jpg",
    category: "Hockey",
    rating: 4.3,
    inStock: true,
    quantity: 39
  },
  {
    id: 24,
    name: "Training Bibs Set",
    price: 2075,
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/sport-bib/f/g/d/6-medium-no-training-bibs-aat-original-imagzy69q95gzrgw.jpeg?q=90&crop=false",
    category: "Hockey",
    rating: 4.2,
    inStock: true,
    quantity: 41
  },

  // Tennis Equipment
  {
    id: 25,
    name: "Professional Tennis Racket",
    price: 10790,
    originalPrice: 13280,
    image: "https://scssports.in/cdn/shop/files/Burn_Pro_PS13_Badminton_Racket_d1da6f79-7a3f-4161-961d-1d72abce3bac_535x.jpg?v=1735299406",
    category: "Tennis",
    rating: 4.8,
    inStock: true,
    quantity: 14
  },
  {
    id: 26,
    name: "Tennis Balls (Pack of 3)",
    price: 745,
    image: "https://inkarto.com/cdn/shop/products/parshwa-traders-tennis-ball-36960781140181.jpg?v=1665381777&width=360",
    category: "Tennis",
    rating: 4.6,
    inStock: true,
    quantity: 58
  },
  {
    id: 27,
    name: "Tennis Shoes (Non-marking)",
    price: 7470,
    image: "https://www.tracerindia.com/cdn/shop/files/5_d90b4af1-c1fa-42d8-868a-2d8aed8a460a.jpg?v=1721708486&width=1946",
    category: "Tennis",
    rating: 4.7,
    inStock: true,
    quantity: 17
  },
  {
    id: 28,
    name: "Sweatbands Set",
    price: 1245,
    image: "https://images-cdn.ubuy.co.in/64410b3edf268a30294e9984-onupgo-sweatband-set-sports-headband.jpg",
    category: "Tennis",
    rating: 4.4,
    inStock: true,
    quantity: 43
  },
  {
    id: 29,
    name: "Tennis Net",
    price: 6640,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMH_tGhYuIrYF_BOMTPhJ34MYIyrVoY46qVgtjwZoUk97ocDIiD1NWMUIh0ZiLBuMWcXg&usqp=CAU",
    category: "Tennis",
    rating: 4.5,
    inStock: true,
    quantity: 11
  },
  {
    id: 30,
    name: "Ball Hopper Basket",
    price: 3320,
    image: "https://nwscdn.com/media/wysiwyg/3kf/tennis/Tennis_Ball_Basket_For_Easy_Tennis_Ball_Collection.jpg",
    category: "Tennis",
    rating: 4.3,
    inStock: true,
    quantity: 27
  },
  {
    id: 31,
    name: "Racket Overgrips",
    price: 830,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2cCrM8FT26K2EFz7zvwGjcpoDsYGtealTog&s",
    category: "Tennis",
    rating: 4.2,
    inStock: true,
    quantity: 64
  },
  {
    id: 32,
    name: "Racket Strings",
    price: 1660,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop",
    category: "Tennis",
    rating: 4.4,
    inStock: true,
    quantity: 36
  },

  // Table Tennis Equipment
  {
    id: 33,
    name: "Table Tennis Table",
    price: 33200,
    originalPrice: 41500,
    image: "https://vixenindia.in/wp-content/uploads/2021/12/5-TMQ-Plus-TT-table.jpg",
    category: "Table Tennis",
    rating: 4.8,
    inStock: true,
    quantity: 6
  },
  {
    id: 34,
    name: "Table Tennis Racket",
    price: 4150,
    image: "https://www.vinexshop.com/Product-Images/Large/2977-Vinex-TT-Bat-Victorie-4-Star.jpg",
    category: "Table Tennis",
    rating: 4.6,
    inStock: true,
    quantity: 32
  },
  {
    id: 35,
    name: "Table Tennis Balls (Pack of 6)",
    price: 1080,
    image: "https://rukminim3.flixcart.com/image/850/1000/l44hyfk0/ball/x/o/j/340-2-star-table-tennis-t-t-balls-standard-4-60-na-table-tennis-original-imagf3baxxsng6jm.jpeg?q=90&crop=false",
    category: "Table Tennis",
    rating: 4.5,
    inStock: true,
    quantity: 78
  },
  {
    id: 36,
    name: "Net and Post Set",
    price: 2490,
    image: "https://stag.global/cdn/shop/files/71pWueSKS4L._AC_UF894_1000_QL80_DpWeblab.jpg?v=1735197887&width=416",
    category: "Table Tennis",
    rating: 4.4,
    inStock: true,
    quantity: 25
  },
  {
    id: 37,
    name: "Table Cover",
    price: 4980,
    image: "https://m.media-amazon.com/images/I/61yAFK0qLOL._AC_UF1000,1000_QL80_.jpg",
    category: "Table Tennis",
    rating: 4.3,
    inStock: true,
    quantity: 18
  },
  {
    id: 38,
    name: "Scoreboard",
    price: 2075,
    image: "https://5.imimg.com/data5/FP/DI/MY-65881981/stag-ttac-962-table-tennis-score-board-500x500.jpg",
    category: "Table Tennis",
    rating: 4.2,
    inStock: true,
    quantity: 13
  },
  {
    id: 39,
    name: "Edge Tape",
    price: 830,
    image: "https://m.media-amazon.com/images/I/61eecGu7zUL.jpg",
    category: "Table Tennis",
    rating: 4.1,
    inStock: true,
    quantity: 91
  },
  {
    id: 40,
    name: "Racket Case",
    price: 1660,
    image: "https://pingpongstar.com/wp-content/uploads/2023/02/71fUfwMR1rS._SL1280_.jpg",
    category: "Table Tennis",
    rating: 4.3,
    inStock: true,
    quantity: 47
  },

  // Basketball Equipment
  {
    id: 41,
    name: "Official Basketball",
    price: 3320,
    image: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwaddccce7/images/61552301/Rebel_61552301-04_hi-res.gif?sw=750&sh=750&sm=fit&q=60",
    category: "Basketball",
    rating: 4.7,
    inStock: true,
    quantity: 34
  },
  {
    id: 42,
    name: "Basketball Hoop with Net",
    price: 16600,
    originalPrice: 20750,
    image: "https://images-cdn.ubuy.co.in/64c861f9a3fba51bd2770692-nba-official-54-in-wall-mounted.jpg",
    category: "Basketball",
    rating: 4.8,
    inStock: true,
    quantity: 9
  },
  {
    id: 43,
    name: "Basketball Backboard",
    price: 12450,
    image: "https://c8.alamy.com/comp/G44P2P/a-general-view-of-the-basketball-ring-and-backboard-equipment-of-the-G44P2P.jpg",
    category: "Basketball",
    rating: 4.6,
    inStock: true,
    quantity: 7
  },
  {
    id: 44,
    name: "Basketball Shoes",
    price: 9960,
    originalPrice: 12450,
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/29884091/2024/8/5/585f1e27-941b-4e32-aecc-b3380e68750c1722857023266-ADIDAS-Men-Woven-Design-Ownthegame-30-Basketball-Shoes-13917-1.jpg",
    category: "Basketball",
    rating: 4.8,
    inStock: true,
    quantity: 20
  },
  {
    id: 45,
    name: "Basketball Jersey and Shorts",
    price: 4150,
    image: "https://images.meesho.com/images/products/99833473/mkyvx_512.webp",
    category: "Basketball",
    rating: 4.5,
    inStock: true,
    quantity: 38
  },
  {
    id: 46,
    name: "Knee/Elbow Pads",
    price: 2075,
    image: "https://m.media-amazon.com/images/I/61wWlMTbH8L._AC_UF1000,1000_QL80_.jpg",
    category: "Basketball",
    rating: 4.4,
    inStock: true,
    quantity: 55
  },
  {
    id: 47,
    name: "Ankle Braces",
    price: 2490,
    image: "https://m.media-amazon.com/images/I/51vSOSDYXTL._AC_UF1000,1000_QL80_.jpg",
    category: "Basketball",
    rating: 4.6,
    inStock: true,
    quantity: 42
  },
  {
    id: 48,
    name: "Referee Whistle",
    price: 1080,
    image: "https://s.alicdn.com/@sc04/kf/H60911f0f7aee42d4932fd6f1e105550bI.jpg_720x720q50.jpg",
    category: "Basketball",
    rating: 4.3,
    inStock: true,
    quantity: 73
  }
];
