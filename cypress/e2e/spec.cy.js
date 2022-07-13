describe('Ejemplo para prueba rápida', () => {
  it('Visita nuestra app y comprueba cosas', () => {
    cy.visit('http://localhost:8000/')

    cy.contains("My To Do List")

    cy.contains("Pay bills").click()
  })
})

describe('Manejo de tareas', () => {
  it('Crea una nueva tarea', () => {
    cy.visit('http://localhost:8000/')

    cy.get('[id=myInput]').type("Regar mis cactuses")
    cy.get('[class=addBtn]').click()

    cy.contains("Regar mis cactuses patata")
  })

  it('Borra la tarea antes creada', () => {
    cy.get('li').last().children('[class=close]').click()
  })
})