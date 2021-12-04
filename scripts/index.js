const menuButton = document.querySelector('.menu__button')
const menuItems = document.querySelector('.menu__items')

/**
 * Set up stagger animation for Creation card
 */
const animateCreation = () => {
	gsap.registerPlugin(ScrollTrigger)

	const fromValues = {
		opacity:0,
		scale:1.2
	}

	const toValues = {
		opacity:1,
		scale:1,
		stagger:0.3
	}

	ScrollTrigger.batch('.creation', {
		trigger:'.creation',
		end:"top bottom",
		onEnter: (elements) => {
			gsap.to(elements, toValues)
		},
		onEnterBack: () => {
			gsap.to('.creation', toValues)
		},
		onLeave: (elements) => {
			gsap.set(elements, fromValues)
		},
		onLeaveBack:() => {
			gsap.set('.creation',fromValues)
		}
	})
}

/**
 * Handle menu button toggle
 * Expand/Close menu (on mobile)
 */
const handleMenuBtnClick = () => {
	const isExpanded  = menuButton.getAttribute('aria-expanded') === 'true'
	const newIsExpanded =  !isExpanded

	menuButton.setAttribute('aria-expanded', newIsExpanded)
	
	const menuBtnLabel = `${newIsExpanded? 'Close':'Open'} the menu`
	menuButton.setAttribute('aria-label', menuBtnLabel)

	/* Add slideIn animation */
	setTimeout(() => {
		menuItems.classList.add('animate')
		const animationEndEvent = menuItems.addEventListener('animationend',() => {
			menuItems.classList.remove('animate')
			removeEventListener('animationend',animationEndEvent)
		}) 
	}, 0)
}

/**
 * Set up event listeners
 */
const setupListeners = () => {
	menuButton.addEventListener('click', handleMenuBtnClick)
}

animateCreation()
setupListeners()