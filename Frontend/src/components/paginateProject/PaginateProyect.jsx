import React from 'react'
import projectsProvider from '../../utils/provider/projectsProvider/projectsProvider'

const PaginateProyect = ({info, projects, setProjects, setInfo}) => {

    const handleNext = async () => {
      const nextPages = info.page + 1;
      const next = await projectsProvider.getProjects(nextPages);
      setProjects(next.docs);

      let {
        hasNextPage,
        hasPrevPage,
        limit,
        nextPage,
        page,
        pagingCounter,
        prevPage,
        totalDocs,
        totalPages,
      } = next;

      setInfo({
        hasNextPage,
        hasPrevPage,
        limit,
        nextPage,
        page,
        pagingCounter,
        prevPage,
        totalDocs,
        totalPages,
      });
    };

    const handlePrev = async () => {
      const prevPages = info.page - 1;
      const prev = await projectsProvider.getProjects(prevPages);
      setProjects(prev.docs);

      let {
        hasNextPage,
        hasPrevPage,
        limit,
        nextPage,
        page,
        pagingCounter,
        prevPage,
        totalDocs,
        totalPages,
      } = prev;

      setInfo({
        hasNextPage,
        hasPrevPage,
        limit,
        nextPage,
        page,
        pagingCounter,
        prevPage,
        totalDocs,
        totalPages,
      });
    };

  return (
    <div>
        {
            info.hasPrevPage === true ? <button onClick={handlePrev}>Prev</button> : null
        }
        {
            info.hasNextPage === true ? <button onClick={handleNext}>Next</button> : null
        }
    </div>
  )
}

export default PaginateProyect