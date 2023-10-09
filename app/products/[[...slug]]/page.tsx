import React from "react";

interface IProductPage {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: IProductPage) => {
  return (
    <div>
      <div>
        ProductPage
        {slug &&
          slug.map((item, index) => (
            <span key={Math.random()}>
              {index + 1 === slug.length ? item : item + " > "}
            </span>
          ))}
      </div>
      <div>{sortOrder}</div>
    </div>
  );
};

export default ProductPage;
