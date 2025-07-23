 document.addEventListener('DOMContentLoaded', function () {
            //  opentab function
            var tablinks = document.getElementsByClassName("about-tab-link");
            var tabcontents = document.getElementsByClassName("about-tab-content");

            function opentab(tabname) {
                for (tablink of tablinks) {
                    tablink.classList.remove("about-active-link");
                }
                for (tabcontent of tabcontents) {
                    tabcontent.classList.remove("about-active-tab");
                }
                // event.currentTarget is defined because opentab is called from an onclick attribute
                event.currentTarget.classList.add("about-active-link");
                document.getElementById(tabname).classList.add("about-active-tab");
            }

            // Make opentab globally accessible if it's called from onclick attributes in HTML
            window.opentab = opentab;


            // Hamburger menu functionality
            const hamburgerIcon = document.getElementById('hamburgerIcon');
            const navLinks = document.getElementById('navLinks');

            // Add a check to ensure elements exist before trying to use them
            if (hamburgerIcon && navLinks) {
                hamburgerIcon.addEventListener('click', function () {
                    navLinks.classList.toggle('active');
                    hamburgerIcon.classList.toggle('active');
                });

                navLinks.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', function () {
                        // Check if the nav menu is currently open before closing
                        if (navLinks.classList.contains('active')) {
                            navLinks.classList.remove('active');
                            hamburgerIcon.classList.remove('active');
                        }
                    });
                });
            } else {
                console.error("Error: Could not find hamburgerIcon or navLinks. Check your HTML IDs.");
            }
        });