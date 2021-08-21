function grabNotDoneTasks() {
    let notdone = document.querySelectorAll('.notdonetask')
    return notdone
}
function grabDoneTasks() {
    let done = document.querySelectorAll('.donetask')
    return done
}

module.exports = {
    grabNotDoneTasks: grabNotDoneTasks,
    grabDoneTasks: grabDoneTasks
}