import React, { useEffect, useState } from "react";

const IndexPage = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const element = document.querySelector(".paragraph");
    if (element.scrollHeight > element.clientHeight) {
      setShowMore(true);
    }
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <p className={showMore ? "" : "line-clamp-5 transition duration-300 paragraph"}>
        In this article, we'll demonstrate how to create a "Read More Read Less"
        button using HTML and CSS. When you want to hide more details while still
        giving readers a sense of what the article or post is about, the read
        more and read less buttons might be useful.
        In this article, we'll demonstrate how to create a "Read More Read Less"
        button using HTML and CSS. When you want to hide more details while still
        giving readers a sense of what the article or post is about, the read
        more and read less buttons might be useful.
        In this article, we'll demonstrate how to create a "Read More Read Less"
        button using HTML and CSS. When you want to hide more details while still
        giving readers a sense of what the article or post is about, the read
        more and read less buttons might be useful.
        In this article, we'll demonstrate how to create a "Read More Read Less"
        button using HTML and CSS. When you want to hide more details while still
        giving readers a sense of what the article or post is about, the read
        more and read less buttons might be useful.
        In this article, we'll demonstrate how to create a "Read More Read Less"
        button using HTML and CSS. When you want to hide more details while still
        giving readers a sense of what the article or post is about, the read
        more and read less buttons might be useful.
      </p>
      {showMore && (
        <button type="button" className="showMoreLes bg-[red]" onClick={toggleShowMore}>
          {showMore ? "read less" : "read more"}
        </button>
      )}
    </>
  );
};

export default IndexPage;
