console.log('chiucs123 bind successful.');
document.addEventListener('DOMContentLoaded', function(){
	console.log('chiucs123 load successful.');
	document.addEventListener('mouseover', function(){
		var modal = document.querySelectorAll('#elementor-template-library-modal');
		if(modal.length > 0){
			if(modal[0].style.display !== "none"){
				var elem;
				elem = document.querySelectorAll('.elementor-component-tab.elementor-template-library-menu-item[data-tab="templates/blocks"]');
				if(elem.length > 0){elem[0].style.display = "none";}
				elem = document.querySelectorAll('.elementor-component-tab.elementor-template-library-menu-item[data-tab="templates/pages"]');
				if(elem.length > 0){elem[0].style.display = "none";}
				elem = document.querySelectorAll('.elementor-component-tab.elementor-template-library-menu-item[data-tab="templates/my-templates"]');
				if(elem.length > 0){
					elem[0].classList.add('elementor-active');
					elem[0].click();
				}
			}
		}
	});
});