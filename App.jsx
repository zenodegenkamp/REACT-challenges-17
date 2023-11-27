import React from 'react';
import ReactDOM from 'react-dom/client'
import diaryData from "./diaryData"
import DiaryCard from "./components/DiaryCard"
import Menu from "./components/Menu"

export default function App() {
    
/* Challenge 

Two DiaryCard components are currently hardcoded with data below. Your task is to use the power of iteration to automatically create DiaryCard components for all 14 days of data in diaryData.js. 

    1. Both of the hardcoded DiaryCard components should be deleted and replaced with a total of 14 
       automatically-created components. 
    
    2. The first two cards should look identical to the original hardcoded cards, and the rest of 
       the cards should look similar. 
        
    3. Make the code concise. 
*/  



      const cards = diaryData.map(day => {
        return  <DiaryCard
                    key={day.id}
                    date={day.date}
                    rating={day.rating}
                    emotions={day.emotions}
                    activities={day.activities}
                    note={day.note}
                    />
    })
    

    return (
        <div>
            <Menu skip={false}/>
            <main className="main-container">
                <div className="sub-header">
                    <h3>April Reports</h3>
                   
                </div>
                 {cards}
                
            </main>
        </div>
    )
}