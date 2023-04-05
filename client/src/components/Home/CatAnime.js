import '../../styles/CatAnime.css'



function CatAnime() {
  const Featured = [
    {
      "image": "https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "id": 1
    },
    {
      "image": "https://images.unsplash.com/photo-1579168765467-3b235f938439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      "id": 2
    },
    {
      "image": "https://images.unsplash.com/photo-1615159547330-5d9f590f78a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "id": 3
    },
    {
      "image": "https://images.unsplash.com/photo-1615678815958-5910c6811c25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "id": 4
    },
    {
      "image": "https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=777&q=80",
      "id": 5
    },
  ]
  return (
    <div>
      {Featured.map((Featured) => (
        <div key={Featured.id}>
          <figure className="swing">
            {Featured.image && <img src={Featured.image} alt="" />}
          </figure>
        </div>
      ))}
    </div>
  );
  
}
export default CatAnime;