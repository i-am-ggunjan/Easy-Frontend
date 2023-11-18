import React, { useState } from "react";
import { LeftArrow, RightArrow } from "@/utils/icons/icons";
import Link from "next/link";
import { useRouter } from "next/router";



const CustomPagination = ({ count }) => {
  const router = useRouter()
  console.log("Router in Blog ::: ", router)
  const rowPerPage = count;
  const totalDocuments = 50;
  const totalPages = Math.ceil(totalDocuments / rowPerPage);

  const [activePage, setActivePage] = useState(Number(router?.query?.page) || 1);
  const [currentPage, setCurrentPage] = useState(Number(router?.query?.page) || 1);

  const handlePageChange = (newPage) => {
    console.log(newPage);
    setCurrentPage(newPage);
    setActivePage(newPage);
  };

  return (
    <>
      <div className="flex gap-5 justify-center py-16">
        <Link href={`${router?.route}?page=${activePage == 1 ? activePage : activePage - 1}`}
          onClick={() => {
            console.log("Previous");
            if (activePage == 1) {
              return;
            } else {
              setActivePage(activePage - 1);
              setCurrentPage(activePage - 1);
              console.log(activePage - 1);
            }
          }}
          disabled={activePage === 1}
          className={`${activePage === 1 ? `bg-slate-400` : `bg-[#0A405C]`
            } text-white p-2 rounded-full`}
        >
          <LeftArrow />
        </Link>

        <Link href={`${router?.route}?page=${activePage == 1 ? `` : activePage - 1}`}
          className={`${activePage - 1 == currentPage ? `bg-[#0A405C]` : `bg-white`
            } ${activePage - 1 !== currentPage ? `text-[#0A405C]` : `text-white`
            } px-4 py-1 rounded-full font-bold ${activePage == 1 ? `hidden` : "block"
            } `}
          onClick={() => handlePageChange(activePage - 1)}
        >
          {activePage == 1 ? `` : activePage - 1}
        </Link>

        <Link href={`${router?.route}?page=${activePage}`}
          className={`${activePage == currentPage ? `bg-[#0A405C]` : `bg-white`
            } ${activePage !== currentPage ? `text-[#0A405C]` : `text-white`
            } px-4 py-1 rounded-full font-bold`}
          onClick={() => handlePageChange(activePage)}
        >
          {activePage}
        </Link>

        <Link href={`${router?.route}?page=${activePage == totalPages ? `` : activePage + 1}`}
          className={`${activePage + 1 == currentPage ? `bg-[#0A405C]` : `bg-white`
            } ${activePage + 1 !== currentPage ? `text-[#0A405C]` : `text-white`
            } px-4 py-1 rounded-full font-bold  ${activePage == totalPages ? `hidden` : `block`
            }`}
          onClick={() => {
            handlePageChange(activePage + 1);
          }}
        >
          {activePage == totalPages ? `` : activePage + 1}
        </Link>

        <Link href={`${router?.route}?page=${activePage == totalPages ? activePage : activePage + 1}`}
          onClick={() => {
            console.log("Next");
            if (activePage === totalPages) {
              return;
            } else {
              setActivePage(activePage + 1);
              setCurrentPage(activePage + 1);
              console.log(activePage + 1);
            }
          }}
          disabled={activePage === totalPages}
          className={`${activePage === totalPages ? `bg-slate-400` : `bg-[#0A405C]`
            } text-white p-2 rounded-full`}
        >
          <RightArrow />
        </Link>
      </div>
    </>
  );
};

export default CustomPagination;
