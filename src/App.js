import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tbody>
            <tr>
              <td>가수</td>
              <td>곡이름</td>
              <td>URL</td>
              <td>길이</td>
              <td>키</td>
              <td>최고 고음</td>
              <td>TJ번호</td>
              <td>KY번호</td>
              <td>순서</td>
            </tr>

            <tr>
              <td>허각 </td>
              <td>Hello</td>
              <td><a href="https://www.youtube.com/watch?v=8kvA5vDII1U">youtube</a></td>
              <td>4.13</td>
              <td>F#</td>
              <td>?</td>
              <td>34409</td>
              <td>?</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
