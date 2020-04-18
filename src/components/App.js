import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import AppShell from "./AppBar";
import TextScreen from "./TextScreen";
import FileScreen from "./FileScreen";
import WordCloudeScreen from "./WordCloudScreen";

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppShell>
          <div>
            <Route exact path="/" component={TextScreen} />
            <Route exact path="/file" component={FileScreen} />
            <Route exact path="/wc" component={WordCloudeScreen} />
          </div>
        </AppShell>
      </Router>
    );
  }
}

export default App;
