import About from '../components/About';
import GroupStructure from '../components/GroupStructure';
import Institutional from '../components/Institutional';

const GroupPage = () => {
  return (
    <div className="pt-[96px] space-y-0">
      <About />
      <GroupStructure />
      <Institutional />
    </div>
  );
};

export default GroupPage;
