import {TopCreatorList} from '../components/TopCreatorList';

const creators = [
  {
    position: 1,
    image: {
        src: "",
        alt: ""
    },
    name: "John Doe",
    change: "+10%",
    numberSold: 100,
    volumeSold: "$1000"
  },
  {
    position: 2,
    image: {
        src: "",
        alt: ""
    },
    name: "Jane Smith",
    change: "-5%",
    numberSold: 80,
    volumeSold: "$800"
  },
  {
    position: 3,
    image: {
        src: "",
        alt: ""
    },
    name: "Jane Smith",
    change: "-5%",
    numberSold: 80,
    volumeSold: "$800"
  },
  {
    position: 4,
    image: {
        src: "",
        alt: ""
    },
    name: "Jane Smith",
    change: "-5%",
    numberSold: 80,
    volumeSold: "$800"
  },
];

const Rankings = () => {
  return (
        <TopCreatorList creators={creators} />
  )
}

export default Rankings;
