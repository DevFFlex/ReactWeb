import BlockSell from "./blockSell/BlockSell";

const Contend2 =(props) => {
    const { initData } = props;
    return (
      <div className="Contend2">
        {initData.map((item) => {
          return <BlockSell {...item} key={item.id} />;
        })}
      </div>
    );
}


export default Contend2;