const nameList = ['Tom', 'Tim', 'Tommy'];
for (let i = 0; i < 3; i++){
  const name = prompt('Enter a name');
  nameList.push(name);
}
for (let i = 0; i < nameList.length; i++)
{
    console.log(nameList[i]);
}