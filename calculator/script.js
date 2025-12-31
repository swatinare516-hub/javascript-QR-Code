var loanForm = document.querySelector("#loanForm")
var resultDiv = document.querySelector(".container .result")
var emi = document.querySelector("#emi")
var interest = document.querySelector("#interest")
var repay = document.querySelector("#repay")

resultDiv.style.display = "none"

loanForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(loanForm)

  let p = parseFloat(formData.get("loanAmt"))
  let annualRate = parseFloat(formData.get("rate"))
  let years = parseFloat(formData.get("tenure"))

  let R = annualRate / 12 / 100
  let N = years * 12

  const emiValue =
    (p * R * Math.pow(1 + R, N)) /
    (Math.pow(1 + R, N) - 1)

  resultDiv.style.display = "block"
  emi.innerHTML = emiValue.toFixed(2)
  repay.innerHTML = (emiValue * N).toFixed(2)
  interest.innerHTML = ((emiValue * N) - p).toFixed(2)
})