import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    srcUrl: "/images/pic1.png",
    gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
    price: 120,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    size: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      { name: "White", code: "bg-white" },
      { name: "Black", code: "bg-black" }
    ],
    category: {
      title: "T-shirts",
      slug: "/shop?category=t-shirts",
      type: "men"
    },
    dressStyle: {
      title: "Casual",
      slug: "/shop?style=casual"
    }
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    srcUrl: "/images/pic2.png",
    gallery: ["/images/pic2.png"],
    price: 260,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
    size: ["Small", "Medium", "Large"],
    colors: [
      { name: "Blue", code: "bg-blue-600" },
      { name: "Black", code: "bg-black" }
    ],
    category: {
      title: "Jeans",
      slug: "/shop?category=jeans",
      type: "women"
    },
    dressStyle: {
      title: "Casual",
      slug: "/shop?style=casual"
    }
  },
  {
    id: 3,
    title: "Chechered Shirt",
    srcUrl: "/images/pic3.png",
    gallery: ["/images/pic3.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    size: ["Medium", "Large", "X-Large"],
    colors: [
      { name: "Blue", code: "bg-blue-600" },
      { name: "Red", code: "bg-red-600" }
    ],
    category: {
      title: "Shirts",
      slug: "/shop?category=shirts",
      type: "men"
    },
    dressStyle: {
      title: "Formal",
      slug: "/shop?style=formal"
    }
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    srcUrl: "/images/pic4.png",
    gallery: ["/images/pic4.png", "/images/pic10.png", "/images/pic11.png"],
    price: 160,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
    size: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      { name: "White", code: "bg-white" },
      { name: "Gray", code: "bg-gray-400" }
    ],
    category: {
      title: "T-shirts",
      slug: "/shop?category=t-shirts",
      type: "kids"
    },
    dressStyle: {
      title: "Casual",
      slug: "/shop?style=casual"
    }
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Vertical Striped Shirt",
    srcUrl: "/images/pic5.png",
    gallery: ["/images/pic5.png", "/images/pic10.png", "/images/pic11.png"],
    price: 232,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
    size: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      { name: "Blue", code: "bg-blue-600" },
      { name: "White", code: "bg-white" }
    ],
    category: {
      title: "Shirts",
      slug: "/shop?category=shirts",
      type: "men"
    },
    dressStyle: {
      title: "Formal",
      slug: "/shop?style=formal"
    }
  },
  {
    id: 6,
    title: "Courage Graphic T-shirt",
    srcUrl: "/images/pic6.png",
    gallery: ["/images/pic6.png", "/images/pic10.png", "/images/pic11.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
    size: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      { name: "Black", code: "bg-black" },
      { name: "White", code: "bg-white" }
    ],
    category: {
      title: "T-shirts",
      slug: "/shop?category=t-shirts",
      type: "women"
    },
    dressStyle: {
      title: "Casual",
      slug: "/shop?style=casual"
    }
  },
  {
    id: 7,
    title: "Loose Fit Bermuda Shorts",
    srcUrl: "/images/pic7.png",
    gallery: ["/images/pic7.png"],
    price: 80,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.0,
    size: ["Small", "Medium", "Large"],
    colors: [
      { name: "Beige", code: "bg-[#F5F5DC]" },
      { name: "Brown", code: "bg-[#4F4631]" }
    ],
    category: {
      title: "Shorts",
      slug: "/shop?category=shorts",
      type: "men"
    },
    dressStyle: {
      title: "Casual",
      slug: "/shop?style=casual"
    }
  },
  {
    id: 8,
    title: "Faded Skinny Jeans",
    srcUrl: "/images/pic8.png",
    gallery: ["/images/pic8.png"],
    price: 210,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    size: ["Small", "Medium", "Large"],
    colors: [
      { name: "Light Blue", code: "bg-blue-300" },
      { name: "Blue", code: "bg-blue-600" }
    ],
    category: {
      title: "Jeans",
      slug: "/shop?category=jeans",
      type: "women"
    },
    dressStyle: {
      title: "Casual",
      slug: "/shop?style=casual"
    }
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Polo with Contrast Trims",
    srcUrl: "/images/pic12.png",
    gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
    price: 242,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
    size: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      { name: "White", code: "bg-white" },
      { name: "Navy", code: "bg-blue-900" }
    ],
    category: {
      title: "T-shirts",
      slug: "/shop?category=t-shirts",
      type: "men"
    },
    dressStyle: {
      title: "Casual",
      slug: "/shop?style=casual"
    }
  },
  {
    id: 13,
    title: "Gradient Graphic T-shirt",
    srcUrl: "/images/pic13.png",
    gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
    size: ["Small", "Medium", "Large", "X-Large"],
    colors: [
      { name: "White", code: "bg-white" },
      { name: "Black", code: "bg-black" }
    ],
    category: {
      title: "T-shirts",
      slug: "/shop?category=t-shirts",
      type: "kids"
    },
    dressStyle: {
      title: "Casual",
      slug: "/shop?style=casual"
    }
  },
  {
    id: 14,
    title: "Leather Tote Bag",
    srcUrl: "/images/pic16.png",
    gallery: ["/images/pic16.png"],
    price: 320,
    discount: {
      amount: 0,
      percentage: 15,
    },
    rating: 4.8,
    size: ["Medium", "Large"],
    colors: [
      { name: "Brown", code: "bg-[#4F4631]" },
      { name: "Black", code: "bg-black" }
    ],
    category: {
      title: "Bags",
      slug: "/shop?category=bags",
      type: "bags"
    },
    material: "Premium Italian Leather",
    capacity: "15L"
  },
  {
    id: 15,
    title: "Premium Leather Bag",
    srcUrl: "/images/pic17.png",
    gallery: ["/images/pic17.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    size: ["Small", "Medium"],
    colors: [
      { name: "Navy", code: "bg-blue-900" },
      { name: "Gray", code: "bg-gray-400" }
    ],
    category: {
      title: "Bags",
      slug: "/shop?category=bags",
      type: "bags"
    },
    material: "Water-resistant Canvas",
    capacity: "20L"
  }
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Alex K.",
    content:
      '"Finding clothes that align with my personal style used to be a challenge until I discovered SHOPONE. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."',
    rating: 5,
    date: "August 14, 2023",
  },
  {
    id: 2,
    user: "Sarah M.",
    content: `"I'm blown away by the quality and style of the clothes I received from SHOPONE. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
    rating: 5,
    date: "August 15, 2023",
  },
  {
    id: 3,
    user: "Ethan R.",
    content: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
    rating: 5,
    date: "August 16, 2023",
  },
  {
    id: 4,
    user: "Olivia P.",
    content: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
    rating: 5,
    date: "August 17, 2023",
  },
  {
    id: 5,
    user: "Liam K.",
    content: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
    rating: 5,
    date: "August 18, 2023",
  },
  {
    id: 6,
    user: "Samantha D.",
    content: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
    rating: 5,
    date: "August 19, 2023",
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <ProductListSec
        title="NEW ARRIVALS"
        data={newArrivalsData}
      />
      <DressStyle />
      <ProductListSec
        title="TOP SELLING"
        data={topSellingData}
      />
      <Brands />
      <Reviews data={reviewsData} />
    </main>
  );
}
