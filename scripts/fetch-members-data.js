// CSV 데이터를 가져와서 구성원 정보 확인
async function fetchMembersData() {
  try {
    const response = await fetch(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EA%B5%AC%EC%84%B1%EC%9B%90%20%EC%86%8C%EA%B0%9C%20225c2457fa38805aa371f51b07ac41bb-FdWFgNA0Fyx2EIh2LKA00yxM7exYmJ.csv",
    )
    const csvText = await response.text()

    console.log("CSV 원본 데이터:")
    console.log(csvText)

    // CSV 파싱
    const lines = csvText.trim().split("\n")
    const headers = lines[0].split(",")

    console.log("\n헤더:", headers)

    const members = []
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",")
      const member = {}
      headers.forEach((header, index) => {
        member[header.trim()] = values[index]?.trim() || ""
      })
      members.push(member)
    }

    console.log("\n파싱된 구성원 데이터:")
    console.log(JSON.stringify(members, null, 2))

    return members
  } catch (error) {
    console.error("CSV 데이터 가져오기 실패:", error)
  }
}

fetchMembersData()
