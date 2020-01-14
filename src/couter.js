import React from 'react';

import TestingContextContainer from "./contexts/testing"

import { parse } from "query-string"

import FormAdd from "./add"
import FormEdit from "./edit"
import List from "./list"
import Detail from "./detail"

function App(props) {

   const url = parse(props.location.search)

  const PageRendered = () => {
    switch (url.action) {
      case "add":
          return <FormAdd />
        break;
      case "edit":
        return <FormEdit id={url.id} />
        break;
      case "detail":
        return <Detail id={url.id} />
        break;
      default:
          return <List />
        break;
    }
  }


  return (
    <TestingContextContainer>
       {PageRendered()}
    </TestingContextContainer>
  );
}

export default App;