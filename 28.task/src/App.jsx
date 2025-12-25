import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className='p-3 flex gap-6 flex-wrap justify-center bg-gray-600 text-white'>
      <Card backImg="./src/assets/img1.jpg" profilePic="./src/assets/img2.jpg" name="Aarohi Mehta" designation="UI Designer" likeCnt="42.3k" postCnt="310" views="390k" />

      <Card backImg="./src/assets/img2.jpg" profilePic="./src/assets/img1.jpg" name="Neha Kapoor" designation="Frontend Developer" likeCnt="61.8k" postCnt="520" views="610k" position="top" />

      <Card backImg="./src/assets/img3.jpg" profilePic="./src/assets/img3.jpg" name="Riya Verma" designation="Product Manager" likeCnt="37.6k" postCnt="280" views="350k" />

      <Card backImg="./src/assets/img4.jpg" profilePic="./src/assets/img4.jpg" name="Simran Kaur" designation="Digital Marketer" likeCnt="74.2k" postCnt="640" views="720k" />

      <Card backImg="./src/assets/img2.jpg" profilePic="./src/assets/img2.jpg" name="Ananya Singh" designation="Backend Developer" likeCnt="29.4k" postCnt="190" views="260k" position="top" />

      <Card backImg="./src/assets/img1.jpg" profilePic="./src/assets/img3.jpg" name="Pooja Nair" designation="UX Researcher" likeCnt="53.9k" postCnt="410" views="500k" />

      <Card backImg="./src/assets/img3.jpg" profilePic="./src/assets/img1.jpg" name="Kritika Joshi" designation="Tech Blogger" likeCnt="88.1k" postCnt="710" views="910k" />

      <Card backImg="./src/assets/img2.jpg" profilePic="./src/assets/img4.jpg" name="Isha Malhotra" designation="Brand Strategist" likeCnt="46.7k" postCnt="360" views="430k" position="top" />

      <Card backImg="./src/assets/img4.jpg" profilePic="./src/assets/img2.jpg" name="Shreya Choudhary" designation="Data Analyst" likeCnt="34.8k" postCnt="250" views="300k" />

      <Card backImg="./src/assets/img1.jpg" profilePic="./src/assets/img1.jpg" name="Anika Bose" designation="Content Creator" likeCnt="92.5k" postCnt="820" views="1.1M" />

    </div>
  )
}

export default App