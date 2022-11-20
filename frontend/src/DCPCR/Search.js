import React, { useState } from "react"

import { Nav, Form } from "react-bootstrap"
import useOnclickOutside from "react-cool-onclickoutside"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import { useHistory } from "react-router-dom";


const Search = () => {
  const history = useHistory();

  const [search, setSearch] = useState()

  const toggle = () => {
    setSearch(true)
  }

  const closeSearch = () => (search === true ? setSearch(false) : null)

  const ref = useOnclickOutside(() => {
    closeSearch()
  })

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log("Entered!!");
        history.push("/");
    }
  }

  return (
    <Nav className="my-auto" ref={ref}>
      <Form
        className={
          search === false
            ? "searchbar fadeOutWidth"
            : search === true
            ? "searchbar fadeInWidth"
            : "searchbar"
        }
      >
        {search === true && (
          <input
            ref={ref}
            className={
              search === true
                ? "search-input fadeIn"
                : search === false
                ? "search-input fadeOut"
                : "search-input"
            }
            type="text"
            name=""
            placeholder="Schemes/Services..."
            onKeyDown={handleKeyDown}/>
        )}
        <div
          className={
            search === true
              ? "icon-bg fadeOut"
              : search === false
              ? "icon-bg fadeIn"
              : "icon-bg"
          }
        >
          {search !== true && (
            <FontAwesomeIcon
              onClick={toggle}
              className={
                search === true
                  ? "search-icon fadeOut"
                  : search === false
                  ? "search-icon fadeIn"
                  : "search-icon"
              }
              icon={faSearch}
            />
          )}
        </div>
      </Form>
    </Nav>
  )
}

export default Search
