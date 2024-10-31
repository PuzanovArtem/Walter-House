import { services } from '/src/js/pages/slide-three/services-const'

export const addServicesToList = serviceListId => {
  const serviceList = document.getElementById(serviceListId)

  if (serviceList) {
    services.forEach(serviceDescription => {
      const listItem = document.createElement('li')
      listItem.className = 'e-service__item'

      const pointDiv = document.createElement('div')
      pointDiv.className = 'e-service__point'

      const textParagraph = document.createElement('p')
      textParagraph.className = 'e-service__text'
      textParagraph.textContent = serviceDescription

      listItem.appendChild(pointDiv)
      listItem.appendChild(textParagraph)

      serviceList.appendChild(listItem)
    })
  }
}
