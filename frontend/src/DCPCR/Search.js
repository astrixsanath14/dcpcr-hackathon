import React, { useState } from "react"

import { Nav, Form } from "react-bootstrap"
import useOnclickOutside from "react-cool-onclickoutside"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Search = () => {
  const [search, setSearch] = useState()

  const toggle = () => {
    setSearch(true)
  }

  const closeSearch = () => (search === true ? setSearch(false) : null)

  const ref = useOnclickOutside(() => {
    closeSearch()
  })

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
          />
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
