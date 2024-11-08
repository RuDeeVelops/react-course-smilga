const Person = ({ name, nickName = 'No nicknames', images }) => {
  const img = images?.[0]?.small?.url || 'https://picsum.photos/id/237/200/300'

  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Nickname: {nickName}</li>
        <li>
          <img
            src={img}
            alt={name}
            style={{
              width: '100px', // Set a fixed width
              height: '100px', // Set the same value for height
              objectFit: 'cover', // This ensures the image covers the area without distortion
              borderRadius: '50%',
            }}
          />
        </li>
      </ul>
    </div>
  )
}

export default Person
