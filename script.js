// script.js

// Video Integration
const videoId = "AMxS9hKd1A4"
const videoLoopDuration = 10 // seconds
const videoQuality = "1080p"
const videoResponsive = true

// Elegant & Minimal Design
const backgroundColor = "white"
const textColor = "#1A1A1A"
const accentColor = "#0077FF"
const designAesthetic = "minimal"

// Complete Content Sections

// 1. Home
const homeHeroSection = {
  videoBackground: true,
  branding: "Think Beyond",
  valueProposition: "Clear value proposition",
}

// 2. Products
const productsSection = {
  platform: "Revolutionary video-sharing platform",
  features: ["Key features highlighted"],
  cta: "Beta access call-to-action",
}

// 3. Team
const teamSection = {
  members: ["Professional team member cards"],
  socialMedia: ["Social media integration"],
  leadership: ["Leadership profiles"],
}

// 4. Job Openings
const jobOpeningsSection = {
  positions: ["Current open positions"],
  benefits: ["Benefits and perks"],
  applicationProcess: ["Application process"],
}

// 5. Core Values
const coreValuesSection = {
  values: ["10 core values as specified"],
  indicators: ["Visual number indicators"],
  descriptions: ["Detailed descriptions"],
}

// 6. Events
const eventsSection = {
  calendar: "Upcoming events calendar",
  registrationLinks: ["Registration links"],
  eventDetails: ["Event details"],
}

// 7. Contact Us
const contactUsSection = {
  formFields: ["fullName", "email", "subject", "message"],
  contactMethods: ["Multiple contact methods"],
  socialMediaLinks: ["Social media links"],
}

// Key Features
const responsiveDesign = true
const smoothAnimations = true
const professionalTypography = true
const optimizedPerformance = true
const accessibilityFeatures = true

// YouTube Video Integration - Fixed
let player
let isPlayerReady = false
let YT // Declare YT variable

// Load YouTube API
function loadYouTubeAPI() {
  if (window.YT) {
    YT = window.YT // Assign YT variable
    initializePlayer()
    return
  }

  const tag = document.createElement("script")
  tag.src = "https://www.youtube.com/iframe_api"
  const firstScriptTag = document.getElementsByTagName("script")[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}

// Initialize player when API is ready
window.onYouTubeIframeAPIReady = () => {
  YT = window.YT // Assign YT variable
  initializePlayer()
}

function initializePlayer() {
  player = new YT.Player("youtube-player", {
    height: "100%",
    width: "100%",
    videoId: "nviiW7MsfOc",
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      fs: 0,
      iv_load_policy: 3,
      loop: 1,
      modestbranding: 1,
      mute: 1,
      playsinline: 1,
      rel: 0,
      showinfo: 0,
      playlist: "nviiW7MsfOc", // Required for looping
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError: onPlayerError,
    },
  })
}

function onPlayerReady(event) {
  isPlayerReady = true
  event.target.mute()
  event.target.playVideo()

  // Hide fallback
  document.querySelector(".hero-fallback").style.display = "none"

  // No need to set up a 10-second loop anymore
  // We'll let the video play in full
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    player.playVideo() // Just restart the video when it ends
  }
}

function onPlayerError(event) {
  console.error("YouTube Error:", event.data)
  document.querySelector(".hero-fallback").style.display = "block"
}

// Function to initialize the website
function initializeWebsite() {
  // Set video background
  if (homeHeroSection.videoBackground) {
    setVideoBackground(videoId, videoLoopDuration, videoQuality, videoResponsive)
  }

  // Set design elements
  document.body.style.backgroundColor = backgroundColor
  document.body.style.color = textColor
  document.body.style.accentColor = accentColor

  // Initialize other sections
  initializeProductsSection(productsSection)
  initializeTeamSection(teamSection)
  initializeJobOpeningsSection(jobOpeningsSection)
  initializeCoreValuesSection(coreValuesSection)
  initializeEventsSection(eventsSection)
  initializeContactUsSection(contactUsSection)
}

// Function to set video background
function setVideoBackground(videoId, loopDuration, quality, responsive) {
  const videoElement = document.createElement("div")
  videoElement.id = "youtube-player"
  document.querySelector(".hero-section").appendChild(videoElement)
}

// Function to initialize Products section
function initializeProductsSection(section) {
  const productsContainer = document.querySelector(".products")
  productsContainer.innerHTML = `
    <h2>${section.platform}</h2>
    <ul>
      ${section.features.map((feature) => `<li>${feature}</li>`).join("")}
    </ul>
    <button>${section.cta}</button>
  `
}

// Function to initialize Team section
function initializeTeamSection(section) {
  const teamContainer = document.querySelector(".team")
  teamContainer.innerHTML = `
    <h2>Our Team</h2>
    <div class="team-members">
      ${section.members.map((member) => `<div class="team-member">${member}</div>`).join("")}
    </div>
    <div class="social-media">
      ${section.socialMedia.map((media) => `<a href="#">${media}</a>`).join("")}
    </div>
    <div class="leadership">
      ${section.leadership.map((profile) => `<div class="leadership-profile">${profile}</div>`).join("")}
    </div>
  `
}

// Function to initialize Job Openings section
function initializeJobOpeningsSection(section) {
  const jobOpeningsContainer = document.querySelector(".job-openings")
  jobOpeningsContainer.innerHTML = `
    <h2>Job Openings</h2>
    <ul>
      ${section.positions.map((position) => `<li>${position}</li>`).join("")}
    </ul>
    <div class="benefits">
      ${section.benefits.map((benefit) => `<p>${benefit}</p>`).join("")}
    </div>
    <div class="application-process">
      ${section.applicationProcess.map((process) => `<p>${process}</p>`).join("")}
    </div>
  `
}

// Function to initialize Core Values section
function initializeCoreValuesSection(section) {
  const coreValuesContainer = document.querySelector(".core-values")
  coreValuesContainer.innerHTML = `
    <h2>Core Values</h2>
    <ul>
      ${section.values.map((value) => `<li>${value}</li>`).join("")}
    </ul>
    <div class="indicators">
      ${section.indicators.map((indicator) => `<span>${indicator}</span>`).join("")}
    </div>
    <div class="descriptions">
      ${section.descriptions.map((description) => `<p>${description}</p>`).join("")}
    </div>
  `
}

// Function to initialize Events section
function initializeEventsSection(section) {
  const eventsContainer = document.querySelector(".events")
  eventsContainer.innerHTML = `
    <h2>${section.calendar}</h2>
    <ul>
      ${section.registrationLinks.map((link) => `<li><a href="#">${link}</a></li>`).join("")}
    </ul>
    <div class="event-details">
      ${section.eventDetails.map((detail) => `<p>${detail}</p>`).join("")}
    </div>
  `
}

// Function to initialize Contact Us section
function initializeContactUsSection(section) {
  const contactUsContainer = document.querySelector(".contact-us")
  contactUsContainer.innerHTML = `
    <h2>Contact Us</h2>
    <form id="contactForm" class="contact-form">
      ${section.formFields.map((field) => `<input type="text" name="${field}" placeholder="${field}">`).join("")}
      <button type="submit">Send</button>
    </form>
    <div class="contact-methods">
      ${section.contactMethods.map((method) => `<p>${method}</p>`).join("")}
    </div>
    <div class="social-media-links">
      ${section.socialMediaLinks.map((link) => `<a href="#">${link}</a>`).join("")}
    </div>
  `
}

// Enhanced JavaScript for MDS Website

// Initialize video fallback
document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector(".hero-video-container")
  const fallback = document.querySelector(".hero-fallback")

  // Show fallback initially
  if (fallback) {
    fallback.style.display = "block"
  }

  // Check if video loads successfully
  const video = document.getElementById("youtube-video")
  if (video) {
    video.onload = () => {
      if (fallback) {
        fallback.style.display = "none"
      }
    }

    video.onerror = () => {
      if (fallback) {
        fallback.style.display = "block"
      }
    }
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Active navigation highlighting
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]")
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link")

    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.parentElement.classList.remove("active")
      if (link.getAttribute("href") === "#" + current) {
        link.parentElement.classList.add("active")
      }
    })
  })

  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".team-card, .job-card, .value-card, .event-card, .product-showcase, .contact-info-card, .contact-form-card, .mission-card, .vision-card, .benefit-item, .feature-item",
  )

  animatedElements.forEach((el) => {
    el.classList.add("loading")
    observer.observe(el)
  })

  // Counter animation for hero stats
  function animateCounters() {
    const counters = document.querySelectorAll(".stat-item h3")
    counters.forEach((counter) => {
      const target = Number.parseInt(counter.textContent.replace(/\D/g, ""))
      const suffix = counter.textContent.replace(/\d/g, "")
      let current = 0
      const increment = target / 100
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          counter.textContent = target + suffix
          clearInterval(timer)
        } else {
          counter.textContent = Math.floor(current) + suffix
        }
      }, 20)
    })
  }

  // Trigger counter animation when hero is visible
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(animateCounters, 1000)
        heroObserver.unobserve(entry.target)
      }
    })
  })

  const heroStats = document.querySelector(".hero-stats")
  if (heroStats) {
    heroObserver.observe(heroStats)
  }

  // Enhanced form handling
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const data = Object.fromEntries(formData)

      // Validation
      if (!data.fullName || !data.email || !data.subject || !data.message) {
        showNotification("Please fill in all required fields.", "error")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        showNotification("Please enter a valid email address.", "error")
        return
      }

      // Submit button loading state
      const submitBtn = this.querySelector('button[type="submit"]')
      const originalText = submitBtn.innerHTML
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...'
      submitBtn.disabled = true

      // Simulate form submission
      setTimeout(() => {
        showNotification("Thank you for your message! We'll get back to you within 24 hours.", "success")
        this.reset()
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false
      }, 2000)
    })
  }

  // Notification system
  function showNotification(message, type = "info") {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll(".notification")
    existingNotifications.forEach((notification) => notification.remove())

    // Create notification
    const notification = document.createElement("div")
    notification.className = `notification notification-${type}`
    notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : "info-circle"} mr-2"></i>
                ${message}
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `

    // Add styles
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            background: ${type === "success" ? "#28a745" : type === "error" ? "#dc3545" : "#007bff"};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            max-width: 400px;
            animation: slideInRight 0.3s ease;
        `

    document.body.appendChild(notification)

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove()
      }
    }, 5000)
  }

  // Add notification styles to head
  const notificationStyles = document.createElement("style")
  notificationStyles.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0;
            margin-left: 15px;
            opacity: 0.8;
            transition: opacity 0.3s ease;
        }
        
        .notification-close:hover {
            opacity: 1;
        }
    `
  document.head.appendChild(notificationStyles)

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallax = document.querySelector(".hero-video-container")
    if (parallax) {
      const speed = scrolled * 0.5
      parallax.style.transform = `translateY(${speed}px)`
    }
  })

  // Dynamic typing effect for hero title
  function typeWriter(element, text, speed = 100) {
    let i = 0
    element.innerHTML = ""

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
        setTimeout(type, speed)
      }
    }

    type()
  }

  // Initialize typing effect after a delay
  setTimeout(() => {
    const heroTitle = document.querySelector(".hero-title")
    if (heroTitle) {
      const originalText = heroTitle.textContent
      typeWriter(heroTitle, originalText, 50)
    }
  }, 1500)

  // Team card hover effects
  document.querySelectorAll(".team-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Job card interactions
  document.querySelectorAll(".job-card").forEach((card) => {
    const applyBtn = card.querySelector(".btn")
    if (applyBtn) {
      applyBtn.addEventListener("click", (e) => {
        e.preventDefault()
        showNotification("Redirecting to application form...", "info")
        setTimeout(() => {
          // Scroll to contact form
          document.getElementById("contact").scrollIntoView({
            behavior: "smooth",
          })
        }, 1000)
      })
    }
  })

  // Event registration handling
  document.querySelectorAll(".event-card .btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault()
      const eventTitle = this.closest(".event-card").querySelector("h4").textContent
      showNotification(`Registration for "${eventTitle}" initiated!`, "success")
      setTimeout(() => {
        document.getElementById("contact").scrollIntoView({
          behavior: "smooth",
        })
      }, 1000)
    })
  })

  // Beta access button handling
  const betaBtn = document.querySelector(".beta-access .btn")
  if (betaBtn) {
    betaBtn.addEventListener("click", (e) => {
      e.preventDefault()
      showNotification("Beta access request initiated! Please fill out the contact form.", "info")
      setTimeout(() => {
        document.getElementById("contact").scrollIntoView({
          behavior: "smooth",
        })
        // Pre-fill subject
        const subjectSelect = document.getElementById("subject")
        if (subjectSelect) {
          subjectSelect.value = "beta"
        }
      }, 1000)
    })
  }

  // Social media link tracking
  document.querySelectorAll(".social-link, .social-link-item").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const platform = this.querySelector("i").className.includes("linkedin")
        ? "LinkedIn"
        : this.querySelector("i").className.includes("twitter")
          ? "Twitter"
          : this.querySelector("i").className.includes("facebook")
            ? "Facebook"
            : this.querySelector("i").className.includes("instagram")
              ? "Instagram"
              : this.querySelector("i").className.includes("youtube")
                ? "YouTube"
                : "Social Media"
      showNotification(`Opening ${platform} profile...`, "info")
    })
  })

  // Lazy loading for images
  const images = document.querySelectorAll('img[src*="placeholder.svg"]')
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        // Add loading animation
        img.style.opacity = "0.5"
        img.style.transition = "opacity 0.3s ease"

        setTimeout(() => {
          img.style.opacity = "1"
        }, 300)

        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))

  // Performance optimization: Debounced scroll handler
  let scrollTimeout
  function debounceScroll(func, wait) {
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(scrollTimeout)
        func(...args)
      }
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(later, wait)
    }
  }

  // Apply debounced scroll to performance-heavy operations
  const debouncedScrollHandler = debounceScroll(() => {
    // Any heavy scroll operations can go here
  }, 10)

  window.addEventListener("scroll", debouncedScrollHandler)

  // Initialize tooltips for interactive elements
  function initTooltips() {
    const tooltipElements = document.querySelectorAll("[data-tooltip]")
    tooltipElements.forEach((element) => {
      element.addEventListener("mouseenter", function () {
        const tooltip = document.createElement("div")
        tooltip.className = "custom-tooltip"
        tooltip.textContent = this.getAttribute("data-tooltip")
        tooltip.style.cssText = `
                    position: absolute;
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    padding: 8px 12px;
                    border-radius: 4px;
                    font-size: 14px;
                    z-index: 1000;
                    pointer-events: none;
                    white-space: nowrap;
                `
        document.body.appendChild(tooltip)

        const rect = this.getBoundingClientRect()
        tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px"
        tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + "px"
      })

      element.addEventListener("mouseleave", () => {
        const tooltip = document.querySelector(".custom-tooltip")
        if (tooltip) {
          tooltip.remove()
        }
      })
    })
  }

  initTooltips()

  console.log("🚀 MDS - Think Beyond website loaded successfully!")
  console.log("💡 All interactive features initialized")
  console.log("🎯 Ready to transform the future of technology")
})

// Utility functions
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Export for global use
window.MDS = {
  scrollToSection,
  version: "2.0.0",
  initialized: true,
}
