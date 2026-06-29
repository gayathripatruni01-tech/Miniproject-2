import { Link } from 'react-router-dom';
const studentData = [
  { id: 1, name: 'Arjun', course: 'BCA' },
  { id: 2, name: 'Priya', course: 'BSc' },
  { id: 3, name: 'Rahul', course: 'MCA' },
  { id: 4, name: 'Naveen', course: 'B.Com' },
  { id: 5, name: 'Mahi', course: 'MBA' },
  { id: 6, name: 'Nikki', course: 'MCA' },
];
export default function Students() {
  return (
    <div style={{ padding:'20px' }}>
      <h2>Student List</h2>
      {studentData.map((s) => (
        <div key={s.id}>
          <Link to={`/students/${s.id}`}>
            {s.name} – {s.course}
          </Link>
        </div>
      ))}
    </div>
  );
}