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
  description: string;
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
    quantity: 3,
    description: "Professional grade cricket bat made from premium English willow. Features a balanced weight distribution for powerful shots and excellent control. Hand-selected wood ensures durability and superior performance on the field."
  },
  {
    id: 2,
    name: "Cricket Ball - Leather",
    price: 2075,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/357220454/RJ/ZC/CR/2100883/ss-cr-world-4-pcs-cricket-balls-500x500.jpg",
    category: "Cricket",
    rating: 4.6,
    inStock: true,
    quantity: 27,
    description: "Premium leather cricket ball with traditional four-piece construction. Hand-stitched seams provide excellent grip for bowlers. Maintains shape and bounce throughout extended play sessions."
  },
  {
    id: 3,
    name: "Batting Pads",
    price: 3815,
    image: "https://5.imimg.com/data5/UF/PQ/MY-24100650/white-cricket-batting-pads.png",
    category: "Cricket",
    rating: 4.5,
    inStock: true,
    quantity: 8,
    description: "Lightweight yet protective batting pads with high-density foam padding. Adjustable straps ensure a secure fit. Designed for maximum mobility while providing comprehensive leg protection."
  },
  {
    id: 4,
    name: "Batting Gloves",
    price: 2490,
    image: "https://setsons.in/cdn/shop/products/Picture5_508d84ba-f388-4d40-89ca-ed6e1b4dd983.png?v=1632172820",
    category: "Cricket",
    rating: 4.7,
    inStock: true,
    quantity: 15,
    description: "Professional batting gloves with premium leather palm for superior grip. High-impact protection on fingers and back of hand. Moisture-wicking inner lining keeps hands dry during long innings."
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
    quantity: 4,
    description: "Advanced cricket helmet with titanium grille for maximum protection. Lightweight design with superior ventilation. Meets international safety standards with adjustable fit system for comfort during long matches."
  },
  {
    id: 6,
    name: "Wicketkeeping Gloves",
    price: 3320,
    image: "https://m.media-amazon.com/images/I/61lzLIZQaOL._AC_UF894,1000_QL80_.jpg",
    category: "Cricket",
    rating: 4.6,
    inStock: true,
    quantity: 12,
    description: "Specialized wicketkeeping gloves with reinforced palm and fingers. Enhanced grip surface for secure catches. Flexible design allows natural hand movement while maintaining protection."
  },
  {
    id: 7,
    name: "Stumps and Bails Set",
    price: 2905,
    image: "https://chanak.co/cdn/shop/files/AT1711.png?v=1709210838",
    category: "Cricket",
    rating: 4.4,
    inStock: true,
    quantity: 6,
    description: "Official size stumps and bails set made from seasoned hardwood. Precision-crafted for perfect balance and easy assembly. Includes carrying case for convenient transportation to matches."
  },
  {
    id: 8,
    name: "Abdominal Guard (Box)",
    price: 1660,
    image: "https://cricketershop.com/cdn/shop/files/Test-1__54383__89465.1570004436.386.513.jpg?v=1721644390",
    category: "Cricket",
    rating: 4.3,
    inStock: true,
    quantity: 22,
    description: "Essential protective gear for batsmen with lightweight yet durable construction. Ergonomic design ensures comfort during extended play. High-impact resistant material provides reliable protection."
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
    quantity: 14,
    description: "FIFA approved soccer ball with superior flight characteristics. Made with high-quality synthetic leather for consistent performance. Perfect weight and balance for professional level play."
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
    quantity: 2,
    description: "Professional football boots with advanced stud configuration for optimal traction. Lightweight synthetic upper with enhanced ball touch. Designed for agility and speed on natural grass surfaces."
  },
  {
    id: 11,
    name: "Shin Guards",
    price: 2075,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRiTVlwtV80g6RNG4iQB_IT1mmHacU51vAjhJiGK7QPfBn1q0y8EgQHHIqpodRhHqMmfU4y4Z1pQ4D5sehFtgLaxqyZpHuWizTB22DBUuUB_V4r4TqJH2DGyQ",
    category: "Soccer",
    rating: 4.5,
    inStock: true,
    quantity: 19,
    description: "Lightweight shin guards with hard shell protection and comfortable foam backing. Adjustable straps ensure secure fit during intense gameplay. Meets FIFA safety standards for competitive play."
  },
  {
    id: 12,
    name: "Goalkeeper Gloves",
    price: 3320,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOMs68JmuTdWgYqAkhUFs6mDLOYEu1PorN-IvAHxA8nSwNjXq0-pLmrOctPDTLAMm3qklpFD4Eh_Xflv39_pTEm4aRzRr2fQnYeTIIUjZ-UPU7C-584Xd1LQ",
    category: "Soccer",
    rating: 4.6,
    inStock: true,
    quantity: 7,
    description: "Professional goalkeeper gloves with superior grip palm technology. Extended cuff provides wrist protection. Breathable mesh backhand keeps hands cool during matches."
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
    quantity: 1,
    description: "Regulation size goalposts with durable steel construction. Weather-resistant powder coating ensures longevity. Includes high-quality net and all necessary hardware for assembly."
  },
  {
    id: 14,
    name: "Training Cones Set",
    price: 1660,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSYGZMQjxGOUSMxoF6FVGyCYhLVqd13yxj7iVElTFuP1DpSSncFheQGeoMdCtwvYCRTneno4sgGxLx10XEsqLAJSjv3cU6bPJJkwQEUZRtd_BsaprY3Tv0G36NmXcGZKJ-uh3MJDA&usqp=CAc",
    category: "Soccer",
    rating: 4.4,
    inStock: true,
    quantity: 31,
    description: "Bright colored training cones for agility and skill development. Durable plastic construction withstands outdoor conditions. Essential for coaching drills and field marking."
  },
  {
    id: 15,
    name: "Corner Flags",
    price: 2490,
    image: "https://images-cdn.ubuy.co.in/65e46f72c86ec3749b0dc4e3-forza-soccer-corner-flags-set-of-4.jpg",
    category: "Soccer",
    rating: 4.3,
    inStock: true,
    quantity: 18,
    description: "Professional corner flags with flexible poles to prevent injury. Bright colors for maximum visibility. Spring-loaded base returns flag to upright position after contact."
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
    quantity: 16,
    description: "Professional team kit with moisture-wicking fabric technology. Lightweight and breathable design for optimal performance. Available in multiple sizes with customization options."
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
    quantity: 5,
    description: "High-performance field hockey stick with carbon fiber construction. Perfectly balanced for power and control. Advanced grip technology ensures secure handling in all weather conditions."
  },
  {
    id: 18,
    name: "Hockey Ball",
    price: 1245,
    image: "https://nwscdn.com/media/wysiwyg/2022/training-hockey-balls-USP3.jpeg",
    category: "Hockey",
    rating: 4.5,
    inStock: true,
    quantity: 34,
    description: "Regulation hockey ball with consistent bounce and durability. Dimpled surface provides optimal aerodynamics and control. Suitable for both training and competitive matches."
  },
  {
    id: 19,
    name: "Hockey Shin Pads",
    price: 2905,
    image: "https://www.alfahockey.in/wp-content/uploads/2020/01/shinguard-white-A.jpg",
    category: "Hockey",
    rating: 4.6,
    inStock: true,
    quantity: 11,
    description: "Lightweight shin pads with high-impact protection. Anatomical design follows leg contours for natural movement. Moisture-wicking inner padding keeps legs dry during intense gameplay."
  },
  {
    id: 20,
    name: "Mouth Guard",
    price: 1080,
    image: "https://m.media-amazon.com/images/I/41dVG0V7pxL._AC_UF1000,1000_QL80_.jpg",
    category: "Hockey",
    rating: 4.4,
    inStock: true,
    quantity: 43,
    description: "Custom-fit mouth guard for dental protection during hockey. Made from medical-grade materials for safety and comfort. Easy to mold for personalized fit and maximum protection."
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
    quantity: 1,
    description: "Complete goalkeeper protection set including helmet, chest guard, leg guards, and kickers. Professional-grade equipment meeting international safety standards. Lightweight design for enhanced mobility."
  },
  {
    id: 22,
    name: "Hockey Shoes",
    price: 5810,
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/r/u/d/-original-imah5xteca3mr2wa.jpeg?q=90&crop=false",
    category: "Hockey",
    rating: 4.5,
    inStock: true,
    quantity: 9,
    description: "Specialized hockey shoes with non-marking rubber sole. Enhanced grip pattern for artificial turf surfaces. Breathable upper material with reinforced toe area for durability."
  },
  {
    id: 23,
    name: "Protective Cup",
    price: 1575,
    image: "https://m.media-amazon.com/images/I/41LfodKrULL._AC_UF894,1000_QL80_.jpg",
    category: "Hockey",
    rating: 4.3,
    inStock: true,
    quantity: 26,
    description: "Essential protective gear for male hockey players. Lightweight and comfortable design with high-impact resistance. Ergonomic shape ensures natural movement during play."
  },
  {
    id: 24,
    name: "Training Bibs Set",
    price: 2075,
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/sport-bib/f/g/d/6-medium-no-training-bibs-aat-original-imagzy69q95gzrgw.jpeg?q=90&crop=false",
    category: "Hockey",
    rating: 4.2,
    inStock: true,
    quantity: 23,
    description: "High-visibility training bibs for team identification during practice sessions. Breathable mesh fabric for comfort. Available in multiple colors for different team groupings."
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
    quantity: 3,
    description: "Tournament-grade tennis racket with advanced carbon fiber frame. Optimized for power and precision with excellent vibration dampening. Preferred by professional players worldwide."
  },
  {
    id: 26,
    name: "Tennis Balls (Pack of 3)",
    price: 745,
    image: "https://inkarto.com/cdn/shop/products/parshwa-traders-tennis-ball-36960781140181.jpg?v=1665381777&width=360",
    category: "Tennis",
    rating: 4.6,
    inStock: true,
    quantity: 37,
    description: "ITF approved tennis balls with consistent bounce and durability. Premium felt covering for optimal performance. Perfect for competitive matches and training sessions."
  },
  {
    id: 27,
    name: "Tennis Shoes (Non-marking)",
    price: 7470,
    image: "https://www.tracerindia.com/cdn/shop/files/5_d90b4af1-c1fa-42d8-868a-2d8aed8a460a.jpg?v=1721708486&width=1946",
    category: "Tennis",
    rating: 4.7,
    inStock: true,
    quantity: 6,
    description: "Professional tennis shoes with superior court grip and lateral support. Non-marking rubber sole protects court surfaces. Breathable upper with reinforced high-wear areas."
  },
  {
    id: 28,
    name: "Sweatbands Set",
    price: 1245,
    image: "https://images-cdn.ubuy.co.in/64410b3edf268a30294e9984-onupgo-sweatband-set-sports-headband.jpg",
    category: "Tennis",
    rating: 4.4,
    inStock: true,
    quantity: 29,
    description: "Moisture-absorbing sweatbands for head and wrists. Soft cotton blend material for comfort during intense matches. Elastic design ensures secure fit without restriction."
  },
  {
    id: 29,
    name: "Tennis Net",
    price: 6640,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMH_tGhYuIrYF_BOMTPhJ34MYIyrVoY46qVgtjwZoUk97ocDIiD1NWMUIh0ZiLBuMWcXg&usqp=CAU",
    category: "Tennis",
    rating: 4.5,
    inStock: true,
    quantity: 4,
    description: "Regulation tennis net with braided polyethylene construction. Weather-resistant with reinforced binding tape. Easy installation with adjustable tension system."
  },
  {
    id: 30,
    name: "Ball Hopper Basket",
    price: 3320,
    image: "https://nwscdn.com/media/wysiwyg/3kf/tennis/Tennis_Ball_Basket_For_Easy_Tennis_Ball_Collection.jpg",
    category: "Tennis",
    rating: 4.3,
    inStock: true,
    quantity: 13,
    description: "Convenient ball collection basket for training sessions. Holds up to 72 tennis balls with easy pickup design. Durable wire construction with comfortable carrying handles."
  },
  {
    id: 31,
    name: "Racket Overgrips",
    price: 830,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2cCrM8FT26K2EFz7zvwGjcpoDsYGtealTog&s",
    category: "Tennis",
    rating: 4.2,
    inStock: true,
    quantity: 41,
    description: "Premium overgrips for enhanced racket handling. Tacky surface provides superior grip in all conditions. Easy to apply and replace for consistent performance."
  },
  {
    id: 32,
    name: "Racket Strings",
    price: 1660,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop",
    category: "Tennis",
    rating: 4.4,
    inStock: true,
    quantity: 20,
    description: "High-performance tennis strings for optimal power and control. Multifilament construction provides excellent feel and tension maintenance. Available in various gauges."
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
    quantity: 1,
    description: "Tournament-grade table tennis table with regulation dimensions. High-density fiberboard surface for consistent ball bounce. Sturdy steel frame with adjustable leg levelers."
  },
  {
    id: 34,
    name: "Table Tennis Racket",
    price: 4150,
    image: "https://www.vinexshop.com/Product-Images/Large/2977-Vinex-TT-Bat-Victorie-4-Star.jpg",
    category: "Table Tennis",
    rating: 4.6,
    inStock: true,
    quantity: 15,
    description: "Professional table tennis racket with high-quality rubber surfaces. Balanced blade for excellent control and spin generation. ITTF approved for competitive play."
  },
  {
    id: 35,
    name: "Table Tennis Balls (Pack of 6)",
    price: 1080,
    image: "https://rukminim3.flixcart.com/image/850/1000/l44hyfk0/ball/x/o/j/340-2-star-table-tennis-t-t-balls-standard-4-60-na-table-tennis-original-imagf3baxxsng6jm.jpeg?q=90&crop=false",
    category: "Table Tennis",
    rating: 4.5,
    inStock: true,
    quantity: 47,
    description: "ITTF approved table tennis balls with consistent bounce characteristics. Made from high-quality celluloid for durability. Perfect roundness ensures predictable ball trajectory."
  },
  {
    id: 36,
    name: "Net and Post Set",
    price: 2490,
    image: "https://stag.global/cdn/shop/files/71pWueSKS4L._AC_UF894_1000_QL80_DpWeblab.jpg?v=1735197887&width=416",
    category: "Table Tennis",
    rating: 4.4,
    inStock: true,
    quantity: 12,
    description: "Regulation net and post set with easy clamp attachment. Adjustable tension for proper net height. Durable construction suitable for both indoor and outdoor tables."
  },
  {
    id: 37,
    name: "Table Cover",
    price: 4980,
    image: "https://m.media-amazon.com/images/I/61yAFK0qLOL._AC_UF1000,1000_QL80_.jpg",
    category: "Table Tennis",
    rating: 4.3,
    inStock: true,
    quantity: 8,
    description: "Waterproof table cover for outdoor table protection. UV-resistant material prevents sun damage. Elastic edges ensure secure fit in windy conditions."
  },
  {
    id: 38,
    name: "Scoreboard",
    price: 2075,
    image: "https://5.imimg.com/data5/FP/DI/MY-65881981/stag-ttac-962-table-tennis-score-board-500x500.jpg",
    category: "Table Tennis",
    rating: 4.2,
    inStock: true,
    quantity: 7,
    description: "Professional scoreboard for tracking match progress. Large, clear numbers visible from player positions. Durable construction with smooth number rotation mechanism."
  },
  {
    id: 39,
    name: "Edge Tape",
    price: 830,
    image: "https://m.media-amazon.com/images/I/61eecGu7zUL.jpg",
    category: "Table Tennis",
    rating: 4.1,
    inStock: true,
    quantity: 49,
    description: "Protective edge tape for table tennis tables. Prevents damage from aggressive play and extends table life. Easy application with strong adhesive backing."
  },
  {
    id: 40,
    name: "Racket Case",
    price: 1660,
    image: "https://pingpongstar.com/wp-content/uploads/2023/02/71fUfwMR1rS._SL1280_.jpg",
    category: "Table Tennis",
    rating: 4.3,
    inStock: true,
    quantity: 28,
    description: "Protective case for table tennis rackets with foam padding. Holds up to two rackets with additional space for balls. Water-resistant zipper protects equipment."
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
    quantity: 17,
    description: "Regulation size basketball with premium composite leather construction. Excellent grip and consistent bounce for indoor and outdoor play. Official size and weight specifications."
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
    quantity: 2,
    description: "Professional basketball hoop with regulation 18-inch rim diameter. Heavy-duty steel construction with weather-resistant coating. Includes all-weather net and mounting hardware."
  },
  {
    id: 43,
    name: "Basketball Backboard",
    price: 12450,
    image: "https://c8.alamy.com/comp/G44P2P/a-general-view-of-the-basketball-ring-and-backboard-equipment-of-the-G44P2P.jpg",
    category: "Basketball",
    rating: 4.6,
    inStock: true,
    quantity: 3,
    description: "Regulation basketball backboard with tempered glass surface. Professional rebound characteristics and durability. Regulation 6-foot width with target square markings."
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
    quantity: 4,
    description: "High-performance basketball shoes with superior ankle support and cushioning. Advanced traction pattern for quick cuts and stops. Breathable upper with reinforced high-wear areas."
  },
  {
    id: 45,
    name: "Basketball Jersey and Shorts",
    price: 4150,
    image: "https://images.meesho.com/images/products/99833473/mkyvx_512.webp",
    category: "Basketball",
    rating: 4.5,
    inStock: true,
    quantity: 21,
    description: "Professional basketball uniform with moisture-wicking fabric technology. Lightweight and breathable design for optimal performance. Available in team colors with customization options."
  },
  {
    id: 46,
    name: "Knee/Elbow Pads",
    price: 2075,
    image: "https://m.media-amazon.com/images/I/61wWlMTbH8L._AC_UF1000,1000_QL80_.jpg",
    category: "Basketball",
    rating: 4.4,
    inStock: true,
    quantity: 33,
    description: "Protective padding for knees and elbows during basketball play. High-impact foam with compression sleeve design. Stays in place during intense gameplay while allowing natural movement."
  },
  {
    id: 47,
    name: "Ankle Braces",
    price: 2490,
    image: "https://m.media-amazon.com/images/I/51vSOSDYXTL._AC_UF1000,1000_QL80_.jpg",
    category: "Basketball",
    rating: 4.6,
    inStock: true,
    quantity: 24,
    description: "Supportive ankle braces for injury prevention and recovery. Adjustable straps provide customized compression and support. Lightweight design fits comfortably inside basketball shoes."
  },
  {
    id: 48,
    name: "Referee Whistle",
    price: 1080,
    image: "https://s.alicdn.com/@sc04/kf/H60911f0f7aee42d4932fd6f1e105550bI.jpg_720x720q50.jpg",
    category: "Basketball",
    rating: 4.3,
    inStock: true,
    quantity: 45,
    description: "Professional referee whistle with clear, loud tone for game officiating. Pealess design prevents freezing in cold weather. Includes lanyard for secure attachment during games."
  }
];
