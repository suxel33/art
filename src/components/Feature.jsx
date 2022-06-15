import React, { Fragment } from "react";

// Don't touch this import
import { fetchQueryResultsFromTermAndValue } from "../api";

<<<<<<< HEAD:src/components/Feature.js

 const Feature = (props) => {
    const { featuredResult } = props;
    const Searchable = (props) => {
      const { searchTerm, setIsLoading, searchValue, setSearchResults } = props;
      return (
        <span className="content">
          <a
            href={searchValue}
            onClick={async (event) => {
              event.preventDefault();
              setIsLoading(true);
  
              try {
                const result = await fetchQueryResultsFromTermAndValue(
                  searchTerm,
                  searchValue
                );
                setSearchResults(result);
              } catch (error) {
                console.error("Total Loss");
              } finally {
                setIsLoading(false);
              }
            }}
          >
            {searchValue}
          </a>
        </span>
      );
    };
    if (!featuredResult) {
      return <main id="feature"></main>;
    }
    const {
      title,
      dated,
      images,
      primaryimageurl,
      description,
      culture,
      style,
      technique,
      medium,
      dimensions,
      people,
      department,
      division,
      contact,
      creditLine,
    } = featuredResult;
    return (
      <main id="feature">
        <div className="object-feature">
          <header>
            <h3>{title}</h3>
            <h4>{dated}</h4>
          </header>
          <section className="facts">
            {description ? (
              <>
                <span className="title">Description</span>
                <span className="content">{description}</span>
              </>
            ) : null}
            {culture ? (
              <>
                <span className="title">Culture</span>
                <Searchable searchTerm="culture" searchValue={culture} />
              </>
            ) : null}
            {style ? (
              <>
                <span className="title">Style</span>
                <span clasName="content">{style}</span>
              </>
            ) : null}
            {technique ? (
              <>
                <span className="title">Technique</span>
                <Searchable searchTerm="technique" searchValue={technique} />
              </>
            ) : null}
            {medium ? (
              <>
                <span clasName="title">Medium</span>
                <Searchable
                  searchTerm="medium"
                  searchValue={medium.toLowerCase()}
                />
              </>
            ) : null}
  
            {dimensions ? (
              <>
                <span className="title">Dimensions</span>
                <span className="content">{dimensions}</span>
              </>
            ) : null}
            {people ? (
              <>
                <span className="title">Person</span>
                {people.length > 0
                  ? people.map((person) => (
                      <Searchable
                        key={person.id}
                        searchTerm="person"
                        searchValue={person.displayname}
                        {...props}
                      />
                    ))
                  : null}
              </>
            ) : null}
            {department ? (
              <>
                <span className="title">Department</span>
                <span className="content">{department}</span>
              </>
            ) : null}
            {division ? (
              <>
                <span className="title">Division</span>
                <span className="content">{division}</span>
              </>
            ) : null}
            {contact ? (
              <>
                <span className="title">Contact</span>
                <Searchable searchTerm="contact" searchValue={contact} />
              </>
            ) : null}
            {creditLine ? (
              <>
                <span className="title">CreditLine</span>
                <span className="content">{creditLine}</span>
              </>
            ) : null}
          </section>
          <section className="photos">
            {images.length > 0
              ? images.map((image) => (
                  <img
                    key={image.ID}
                    src={primaryimageurl}
                    alt={primaryimageurl}
                  />
                ))
              : null}
          </section>
        </div>
      </main>
    );
  };
  
  

=======
/**
 * We need a new component called Searchable which:
 *
 * Has a template like this:
 *
 * <span className="content">
 *  <a href="#" onClick={async (event) => {}}>SOME SEARCH TERM</a>
 * </span>
 *
 * You'll need to read searchTerm, searchValue, setIsLoading, and setSearchResults off of the props.
 *
 * When someone clicks the anchor tag, you should:
 *
 * - preventDefault on the event
 * - call setIsLoading, set it to true
 *
 * Then start a try/catch/finally block:
 *
 * try:
 *  - await the result of fetchQueryResultsFromTermAndValue, passing in searchTerm and searchValue
 *  - send the result to setSearchResults (which will update the Preview component)
 * catch:
 *  - console.error the error
 * finally:
 *  - call setIsLoading, set it to false
 */
const Searchable = (props) => {};
>>>>>>> 0e9af34406b265eee83b23b02b52830fb5aeb455:src/components/Feature.jsx

/**
 * We need a new component called Feature which looks like this when no featuredResult is passed in as a prop:
 *
 * <main id="feature"></main>
 *
 * And like this when one is:
 *
 * <main id="feature">
 *   <div className="object-feature">
 *     <header>
 *       <h3>OBJECT TITLE</h3>
 *       <h4>WHEN IT IS DATED</h4>
 *     </header>
 *     <section className="facts">
 *       <span className="title">FACT NAME</span>
 *       <span className="content">FACT VALUE</span>
 *       <span className="title">NEXT FACT NAME</span>
 *       <span className="content">NEXT FACT VALUE</span>
 *     </section>
 *     <section className="photos">
 *       <img src=IMAGE_URL alt=SOMETHING_WORTHWHILE />
 *     </section>
 *   </div>
 * </main>
 *
 * The different facts look like this: title, dated, images, primaryimageurl, description, culture, style,
 * technique, medium, dimensions, people, department, division, contact, creditline
 *
 * The <Searchable /> ones are: culture, technique, medium (first toLowerCase it), and person.displayname (one for each PEOPLE)
 *
 * NOTE: people and images are likely to be arrays, and will need to be mapped over if they exist
 *
 * This component should be exported as default.
 */
<<<<<<< HEAD:src/components/Feature.js

export default Feature;
=======
const Feature = (props) => {};

export default Feature;
>>>>>>> 0e9af34406b265eee83b23b02b52830fb5aeb455:src/components/Feature.jsx
