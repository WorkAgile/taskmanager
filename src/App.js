import React from "react";
import { ThemeProvider } from "emotion-theming";
import Theme from "./themes/defaultThemes";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import TaskList from "./pages/TaskList";
import NewTask from "./pages/NewTask";
import AddTaskButton from "./components/AddTaskButton";
import BackButton from "./components/BacktButton";

const Container = styled.div`
  display: flex;
  flex-flow: column;

  height: 100vh;
  background-color: ${props => props.theme.default.text};
`;

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Container>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/">
                <TaskList />
                <AddTaskButton />
              </Route>
              <Route exact path="/new">
                <NewTask />
                <BackButton />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
