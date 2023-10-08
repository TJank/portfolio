import Left from '../../components/home/Left'
import Right from '../../components/home/Right'


export default function HomeScreen() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 container px-4 md:px-0 pt-2.5">
      <Left />
      <Right />
    </div>
  )
}
