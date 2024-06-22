import React, { useState } from 'react';

const CreateCourseForm = () => {
  const [testName, setTestName] = useState('');
  const [testDescription, setTestDescription] = useState('');
  const [noofquestions, setNoofquestions] = useState(0);
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState(0);
  const [thumbnail, setThumbnail] = useState(null);
  const [instructions, setInstructions] = useState([]);
  const [tags, setTags] = useState([]);
  const [totalMarks, setTotalMarks] = useState(0);
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      testName,
      testDescription,
      noofquestions,
      duration,
      price,
      thumbnail,
      instructions,
      tags,
      totalMarks,
      category
    };

    fetch('http://localhost:8000/api/v1/quiz/createQuiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Test Name:
        <input type="text" value={testName} onChange={(event) => setTestName(event.target.value)} />
      </label>
      <label>
        Test Description:
        <textarea value={testDescription} onChange={(event) => setTestDescription(event.target.value)} />
      </label>
      <label>
        Number of Questions:
        <input type="number" value={noofquestions} onChange={(event) => setNoofquestions(event.target.value)} />
      </label>
      <label>
        Duration:
        <input type="text" value={duration} onChange={(event) => setDuration(event.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
      </label>
      <label>
        Thumbnail:
        <input type="file" onChange={(event) => setThumbnail(event.target.files[0])} />
      </label>
      <label>
        Instructions:
        <textarea value={instructions} onChange={(event) => setInstructions(event.target.value.split('\n'))} />
      </label>
      <label>
        Tags:
        <input type="text" value={tags} onChange={(event) => setTags(event.target.value.split(','))} />
      </label>
      <label>
        Total Marks:
        <input type="number" value={totalMarks} onChange={(event) => setTotalMarks(event.target.value)} />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(event) => setCategory(event.target.value)} />
      </label>
      <button type="submit">Create Course</button>
    </form>
  );
};

export default CreateCourseForm;