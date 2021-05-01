const selectWrapper = document.getElementsByClassName('select-wrapper')
const selectWrapperLength = selectWrapper.length

for (let i = 0; i < selectWrapperLength; i++) {
	const selectElem = selectWrapper[i].getElementsByTagName('select')[0]
	const selectElemLength = selectElem.length

	// create a div for each select that will replace it
	const divSelectItem = document.createElement('div')
	divSelectItem.setAttribute('class', 'select-selected')
	// the currently selected option of this select element
	divSelectItem.innerHTML = selectElem.options[selectElem.selectedIndex].innerHTML
	selectWrapper[i].appendChild(divSelectItem)

	// for each select element we create a new div that that will contain the option list
	const divSelect = document.createElement('div')
	divSelect.setAttribute('class', 'select-items select-hide')

	// iterate through all options of the select
	for (let j = 1; j < selectElemLength; j++) {
		/*
           for each option in the original element, create a new div that will act as an option item
        */
		const divItem = document.createElement('div')
		divItem.innerHTML = selectElem.options[j].innerHTML
		divItem.addEventListener('click', function(e) {
			/*  when an item is clicked, update the original select box,
                and the selected item: */
			const parentSelect = this.parentNode.parentNode.getElementsByTagName('select')[0]
			parentSelectLength = parentSelect.length
			prevSibling = this.parentNode.previousSibling // option before ?

			for (let k = 0; k < parentSelectLength; k++) {
				if (parentSelect.options[k].innerHTML === this.innerHTML) {
					parentSelect.selectedIndex = k
					// put selected innerHTML if the div iten in the select innerHTML as selected text
					prevSibling.innerHTML = this.innerHTML

					// the previously selected item (option)
					const sameAsSelected = this.parentNode.getElementsByClassName('same-as-selected')
					sameAsSelectedLength = sameAsSelected.length

					for (let m = 0; m < sameAsSelectedLength; m++) {
						sameAsSelected[m].removeAttribute('class')
					}
					this.setAttribute('class', 'same-as-selected')
					break
				}
			}
			prevSibling.click()
		})
		divSelect.appendChild(divItem)
	}
	selectWrapper[i].appendChild(divSelect)
	/* when the select box is clicked close any other select box in the document,
		except the current box */
	divSelectItem.addEventListener('click', function(e) {
		e.preventDefault()
		closeAllSelect(this)
		this.nextSibling.classList.toggle('select-hide')
		this.classList.toggle('select-arrow-active')
	})
}

const closeAllSelect = (elem) => {
	/* will close all select boxes in the document, except the current one */
	const arrNo = []
	const selectItems = document.getElementsByClassName('select-items')
	const selectSelected = document.getElementsByClassName('select-selected')
	const selectItemsLength = selectItems.length
	const selectSelectedLength = selectSelected.length

	for (let n = 0; n < selectSelectedLength; n++) {
		if(elem = selectSelected[n]) {
			arrNo.push(n)
		} else {
			selectSelected[n].classList.remove('select-arrow-active')
		}
	}


	for (let o = 0; o < selectItemsLength; o++) {
		if (arrNo.indexOf(o)) {
			selectItems[o].classList.add('select-hide')
		}
	}
}

/* if the user clicks anywhere outside the select box, them close all all select boxes */
document.addEventListener('click', closeAllSelect)
