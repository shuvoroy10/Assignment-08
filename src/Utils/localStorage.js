// get
export const loadInstallList = () => {
  try {
    const data = localStorage.getItem('installList')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }
}

// save
export const updateList = product => {
  const installList = loadInstallList()

  try {
    const isDuplicate = installList.some(p => p.id === product.id)
    if (isDuplicate) return alert('Already added in installList')
    const updatedInstallList = [...installList, product]
    localStorage.setItem('installList', JSON.stringify(updatedInstallList))
  } catch (err) {
    console.log(err)
  }
}

// delete
export const removeFrominstallList = id => {
  const installList = loadInstallList()
  try {
    const updatedInstallList = installList.filter(p => p.id !== id)
    localStorage.setItem('installList', JSON.stringify(updatedInstallList))
  } catch (err) {
    console.log(err)
  }
}
