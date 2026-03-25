import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Homepage
app.get('/', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GSD Associates - Elite Sales Leadership for Growing B2B Companies</title>
    <meta name="description" content="Scale your B2B revenue faster with executive-level sales leadership. Fractional VP of Sales & consulting to build pipeline, refine process, and drive measurable results.">
    <link rel="canonical" href="https://www.gsdassociates.net/">
    <meta property="og:title" content="GSD Associates — Fractional VP of Sales for B2B Companies">
    <meta property="og:description" content="Get executive-level sales leadership without the full-time cost. Fractional VP of Sales for B2B companies at $1M–$10M. Results in 30 days.">
    <meta property="og:url" content="https://www.gsdassociates.net/">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="GSD Associates">
    <meta property="og:image" content="https://www.gsdassociates.net/logo.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="GSD Associates — Fractional VP of Sales for B2B Companies">
    <meta name="twitter:description" content="Executive-level sales leadership without the full-time cost. Results in 30 days for B2B companies at $1M–$10M.">
    <meta name="twitter:site" content="@GSDAssociates">
    
    <!-- Rb2B Identification Script -->
    <script>!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://b2bjsstore.s3.us-west-2.amazonaws.com/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("GNLKQHPL136Q");</script>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        * {
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth;
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
        }
        
        .gradient-text {
            background: linear-gradient(135deg, #1e3a8a 0%, #f97316 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .stat-card {
            background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .float-animation {
            animation: float 6s ease-in-out infinite;
        }
        
        .testimonial-card {
            background: linear-gradient(145deg, #ffffff, #f0f0f0);
            border-left: 4px solid #f97316;
        }
        
        .cta-button {
            background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(249, 115, 22, 0.4);
        }
        
        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: left 0.5s;
        }
        
        .cta-button:hover::before {
            left: 100%;
        }
        
        .service-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
            margin-bottom: 1.5rem;
        }
        
        .trust-badge {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            background-color: rgba(0, 0, 0, 0.7);
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background-color: white;
            margin: 2% auto;
            padding: 0;
            border-radius: 20px;
            width: 90%;
            max-width: 600px;
            max-height: 95vh;
            overflow-y: auto;
            animation: slideIn 0.3s ease;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            padding: 20px;
        }
        
        .close:hover {
            color: #000;
        }
        
        input, textarea {
            transition: all 0.3s ease;
        }
        
        input:focus, textarea:focus {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(30, 58, 138, 0.1);
        }
        
        .result-metric {
            font-size: 3rem;
            font-weight: 800;
            color: #1e3a8a;
        }
        
        .pricing-card {
            transition: all 0.3s ease;
        }
        
        .pricing-card:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .featured-pricing {
            border: 3px solid #f97316;
            transform: scale(1.05);
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="fixed w-full bg-white shadow-lg z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <div class="flex items-center">
                    <span class="text-2xl font-bold gradient-text">GSD Associates</span>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#services" class="text-gray-700 hover:text-blue-700 transition font-medium">Services</a>
                    <a href="#results" class="text-gray-700 hover:text-blue-700 transition font-medium">Results</a>
                    <a href="#process" class="text-gray-700 hover:text-blue-700 transition font-medium">Process</a>
                    <a href="#testimonials" class="text-gray-700 hover:text-blue-700 transition font-medium">Testimonials</a>
                    <a href="/blog" class="text-gray-700 hover:text-blue-700 transition font-medium">Blog</a>
                    <a href="/about" class="text-gray-700 hover:text-blue-700 transition font-medium">About</a>
                    <a href="https://gsdassociatesmeeting.as.me/" target="_blank" class="cta-button text-white px-6 py-2 rounded-full font-semibold inline-block">
                        Book Strategy Call
                    </a>
                </div>
                <div class="md:hidden">
                    <button onclick="toggleMobileMenu()" class="text-gray-700">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobileMenu" class="hidden md:hidden bg-white border-t">
            <div class="px-4 py-4 space-y-3">
                <a href="#services" class="block text-gray-700 hover:text-blue-700 font-medium">Services</a>
                <a href="#results" class="block text-gray-700 hover:text-blue-700 font-medium">Results</a>
                <a href="#process" class="block text-gray-700 hover:text-blue-700 font-medium">Process</a>
                <a href="#testimonials" class="block text-gray-700 hover:text-blue-700 font-medium">Testimonials</a>
                <a href="/blog" class="block text-gray-700 hover:text-blue-700 font-medium">Blog</a>
                <a href="/about" class="block text-gray-700 hover:text-blue-700 font-medium">About</a>
                <a href="https://gsdassociatesmeeting.as.me/" target="_blank" class="cta-button text-white px-6 py-3 rounded-full font-semibold w-full block text-center">
                    Book Strategy Call
                </a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="gradient-bg pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="text-white">
                    <div class="inline-block trust-badge px-4 py-2 rounded-full mb-6">
                        <i class="fas fa-certificate mr-2"></i>
                        <span class="font-semibold">Executive-Level Sales Leadership</span>
                    </div>
                    <h1 class="text-5xl md:text-6xl font-black mb-6 leading-tight">
                        Scale Your B2B Revenue <span class="text-yellow-300">10X Faster</span>
                    </h1>
                    <p class="text-xl mb-8 text-gray-100 leading-relaxed">
                        Get proven VP of Sales expertise without the full-time cost. Build pipeline, refine your process, and drive measurable results with fractional leadership that delivers—for SaaS, manufacturing, professional services, and beyond.
                    </p>
                    
                    <!-- Trust Indicators -->
                    <div class="flex flex-wrap gap-6 mb-10">
                        <div class="flex items-center">
                            <i class="fas fa-check-circle text-green-300 text-2xl mr-2"></i>
                            <span>All B2B Industries</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-check-circle text-green-300 text-2xl mr-2"></i>
                            <span>Proven Track Record</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-check-circle text-green-300 text-2xl mr-2"></i>
                            <span>Flexible Engagements</span>
                        </div>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="https://gsdassociatesmeeting.as.me/" target="_blank" class="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-2xl inline-block text-center">
                            <i class="fas fa-calendar-check mr-2"></i>
                            Book Free Strategy Call
                        </a>
                        <a href="#results" class="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition text-center">
                            See Results
                        </a>
                    </div>
                </div>
                
                <!-- Stats Cards -->
                <div class="grid grid-cols-2 gap-6 float-animation">
                    <div class="stat-card p-6 rounded-2xl shadow-xl hover-lift">
                        <div class="result-metric">3-5x</div>
                        <p class="text-gray-700 font-semibold mt-2">Pipeline Growth</p>
                        <p class="text-gray-500 text-sm">Average in first 90 days</p>
                    </div>
                    <div class="stat-card p-6 rounded-2xl shadow-xl hover-lift">
                        <div class="result-metric">40%+</div>
                        <p class="text-gray-700 font-semibold mt-2">Conversion Lift</p>
                        <p class="text-gray-500 text-sm">Stage-to-stage improvement</p>
                    </div>
                    <div class="stat-card p-6 rounded-2xl shadow-xl hover-lift">
                        <div class="result-metric">65%</div>
                        <p class="text-gray-700 font-semibold mt-2">Cost Savings</p>
                        <p class="text-gray-500 text-sm">vs. Full-time VP hire</p>
                    </div>
                    <div class="stat-card p-6 rounded-2xl shadow-xl hover-lift">
                        <div class="result-metric">30d</div>
                        <p class="text-gray-700 font-semibold mt-2">Time to Impact</p>
                        <p class="text-gray-500 text-sm">From engagement start</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Problem Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-black mb-6">
                You Need to Scale Revenue. Fast.
            </h2>
            <p class="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Whether you've secured funding, won a major contract, or are entering new markets—scaling revenue requires more than effort. It requires <span class="font-bold text-blue-900">proven sales leadership</span>.
            </p>
            
            <div class="grid md:grid-cols-3 gap-8 mt-16">
                <div class="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg text-left">
                    <i class="fas fa-exclamation-triangle text-red-500 text-4xl mb-4"></i>
                    <h3 class="text-xl font-bold mb-3 text-gray-800">The Full-Time VP Problem</h3>
                    <p class="text-gray-700">$200K+ salary, equity, and 6-12 months to find the right fit. Plus the risk of a bad hire that could derail your growth plans and waste critical resources.</p>
                </div>
                
                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-lg text-left">
                    <i class="fas fa-clock text-yellow-500 text-4xl mb-4"></i>
                    <h3 class="text-xl font-bold mb-3 text-gray-800">The Speed Problem</h3>
                    <p class="text-gray-700">Your stakeholders expect aggressive revenue growth. Every month without a repeatable sales system is lost opportunity and competitive disadvantage.</p>
                </div>
                
                <div class="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg text-left">
                    <i class="fas fa-question-circle text-blue-500 text-4xl mb-4"></i>
                    <h3 class="text-xl font-bold mb-3 text-gray-800">The Experience Problem</h3>
                    <p class="text-gray-700">You need someone who's done it before—who has the playbook, the connections, and the battle scars from scaling B2B sales across multiple industries.</p>
                </div>
            </div>
            
            <div class="mt-16 p-8 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl border-2 border-blue-200">
                <h3 class="text-3xl font-bold mb-4 gradient-text">There's a Better Way</h3>
                <p class="text-xl text-gray-700">Get executive-level sales leadership <strong>without the full-time overhead, risk, or 6-month search</strong>. Deploy proven expertise in 30 days, not 6 months.</p>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black mb-4">
                    How We Help You Scale
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Three engagement models designed for different stages and needs—all focused on driving pipeline, improving conversion, and building a repeatable sales engine.
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Sales Consulting -->
                <div class="bg-white p-8 rounded-2xl shadow-xl hover-lift">
                    <div class="service-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 text-gray-800">Sales Consulting</h3>
                    <p class="text-gray-600 mb-6">Build pipeline, refine process, align your tech stack</p>
                    
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span class="text-gray-700"><strong>Inbound lead handling:</strong> Speed-to-lead, routing, qualification, SLAs</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span class="text-gray-700"><strong>Outbound engine:</strong> Targeting, messaging, sequences, meeting conversion</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span class="text-gray-700"><strong>KPI clarity:</strong> Activity → Meetings → Pipeline → Revenue</span>
                        </li>
                    </ul>
                    
                    <div class="border-t pt-6">
                        <p class="text-sm text-gray-500 mb-2">Best for:</p>
                        <p class="font-semibold text-orange-600">Growing companies building their first scalable sales process</p>
                    </div>
                </div>
                
                <!-- Fractional VP -->
                <div class="bg-white p-8 rounded-2xl shadow-xl hover-lift featured-pricing">
                    <div class="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                        MOST POPULAR
                    </div>
                    <div class="service-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 text-gray-800">Fractional VP of Sales</h3>
                    <p class="text-gray-600 mb-6">Senior leadership embedded for 3-6 months</p>
                    
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span class="text-gray-700"><strong>SDR/BDR systems:</strong> Weekly targets, coaching cadence, QA process</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span class="text-gray-700"><strong>SDR→AE handoff:</strong> Clear rules, definitions of qualified, no more dead leads</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span class="text-gray-700"><strong>Deal review & coaching:</strong> Discovery frameworks to lift conversion</span>
                        </li>
                    </ul>
                    
                    <div class="border-t pt-6">
                        <p class="text-sm text-gray-500 mb-2">Best for:</p>
                        <p class="font-semibold text-orange-600">Mid-market B2B companies with 5-20 person sales teams</p>
                    </div>
                </div>
                
                <!-- Process Development -->
                <div class="bg-white p-8 rounded-2xl shadow-xl hover-lift">
                    <div class="service-icon">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 text-gray-800">Sales Process Development</h3>
                    <p class="text-gray-600 mb-6">Define ICP, shorten cycle, improve conversion</p>
                    
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span class="text-gray-700"><strong>Discovery framework:</strong> Qualification checklist, must-have questions</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span class="text-gray-700"><strong>Stage definitions:</strong> Exit criteria to stop stalled pipeline</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span class="text-gray-700"><strong>Follow-up standards:</strong> Handoff notes requirements (no more thin opps)</span>
                        </li>
                    </ul>
                    
                    <div class="border-t pt-6">
                        <p class="text-sm text-gray-500 mb-2">Best for:</p>
                        <p class="font-semibold text-orange-600">Established B2B companies refining their growth engine</p>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-16">
                <a href="https://gsdassociatesmeeting.as.me/" target="_blank" class="cta-button text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl inline-block">
                    Schedule Your Free Strategy Call
                    <i class="fas fa-arrow-right ml-2"></i>
                </a>
                <p class="text-gray-500 mt-4">30-minute call • No obligation • Tailored recommendations</p>
            </div>
        </div>
    </section>

    <!-- Results Section -->
    <section id="results" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black mb-4">
                    Real Results. Real Impact.
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    We don't just give advice—we drive measurable outcomes that show up in your board deck.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <div class="bg-gradient-to-br from-blue-50 to-slate-50 p-10 rounded-2xl border-2 border-blue-200 hover-lift">
                    <div class="flex items-center mb-6">
                        <div class="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                            <i class="fas fa-rocket text-white text-2xl"></i>
                        </div>
                        <div>
                            <h3 class="text-3xl font-black text-blue-900">Technology Company</h3>
                            <p class="text-gray-600">Fleet Management Software</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="bg-white p-4 rounded-lg">
                            <p class="text-sm text-gray-600 mb-1">Pipeline Growth (90 days)</p>
                            <p class="text-3xl font-bold text-blue-900">+340%</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg">
                            <p class="text-sm text-gray-600 mb-1">Lead-to-Close Conversion</p>
                            <p class="text-3xl font-bold text-blue-900">+52%</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg">
                            <p class="text-sm text-gray-600 mb-1">Average Deal Size</p>
                            <p class="text-3xl font-bold text-blue-900">+28%</p>
                        </div>
                    </div>
                    <p class="mt-6 text-gray-700 italic border-l-4 border-orange-500 pl-4">
                        "Transformed our outbound motion from random activity to a predictable pipeline machine. We went from 15 qualified meetings/month to 65+ in 90 days."
                    </p>
                </div>
                
                <div class="bg-gradient-to-br from-slate-50 to-gray-50 p-10 rounded-2xl border-2 border-slate-300 hover-lift">
                    <div class="flex items-center mb-6">
                        <div class="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                            <i class="fas fa-chart-line text-white text-2xl"></i>
                        </div>
                        <div>
                            <h3 class="text-3xl font-black text-slate-800">Industrial Services</h3>
                            <p class="text-gray-600">Workplace Safety Solutions</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="bg-white p-4 rounded-lg">
                            <p class="text-sm text-gray-600 mb-1">Deal Cycle Reduction</p>
                            <p class="text-3xl font-bold text-slate-700">-35%</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg">
                            <p class="text-sm text-gray-600 mb-1">Win Rate Improvement</p>
                            <p class="text-3xl font-bold text-slate-700">+44%</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg">
                            <p class="text-sm text-gray-600 mb-1">Revenue Impact (6 months)</p>
                            <p class="text-3xl font-bold text-slate-700">+$2.4M</p>
                        </div>
                    </div>
                    <p class="mt-6 text-gray-700 italic border-l-4 border-orange-500 pl-4">
                        "Built our entire discovery framework from scratch. Sales reps stopped winging it, and our win rate nearly doubled in one quarter."
                    </p>
                </div>
            </div>
            
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-10 rounded-2xl border-2 border-green-200">
                <h3 class="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                    <i class="fas fa-bullseye text-green-600 mr-3"></i>
                    What Our Clients Achieve
                </h3>
                <div class="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                        <p class="text-5xl font-black text-green-600 mb-2">3-5x</p>
                        <p class="text-gray-700 font-semibold">Pipeline Growth</p>
                    </div>
                    <div>
                        <p class="text-5xl font-black text-green-600 mb-2">40%+</p>
                        <p class="text-gray-700 font-semibold">Conversion Lift</p>
                    </div>
                    <div>
                        <p class="text-5xl font-black text-green-600 mb-2">30-60d</p>
                        <p class="text-gray-700 font-semibold">Time to Impact</p>
                    </div>
                    <div>
                        <p class="text-5xl font-black text-green-600 mb-2">65%</p>
                        <p class="text-gray-700 font-semibold">Cost Savings</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Process Section -->
    <section id="process" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black mb-4">
                    Our Proven 4-Phase Process
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    From diagnostic to deployment, we build a sales engine that scales with you
                </p>
            </div>
            
            <div class="space-y-8">
                <div class="bg-white p-8 rounded-2xl shadow-lg hover-lift flex items-start">
                    <div class="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl mr-6 flex-shrink-0">
                        1
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-3">Discovery & Diagnostic (Week 1-2)</h3>
                        <p class="text-gray-700 mb-4">Deep dive into your current state—pipeline analysis, rep shadowing, tech stack audit, ICP refinement. We identify the bottlenecks killing your conversion.</p>
                        <div class="flex flex-wrap gap-3">
                            <span class="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">Pipeline Audit</span>
                            <span class="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">Rep Shadowing</span>
                            <span class="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">ICP Analysis</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg hover-lift flex items-start">
                    <div class="bg-slate-700 text-white w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl mr-6 flex-shrink-0">
                        2
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-3">Framework & Playbook Build (Week 3-4)</h3>
                        <p class="text-gray-700 mb-4">Create your sales playbook—discovery framework, qualification criteria, stage definitions, handoff protocols. Everything documented and repeatable.</p>
                        <div class="flex flex-wrap gap-3">
                            <span class="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">Discovery Framework</span>
                            <span class="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">Qualification Checklist</span>
                            <span class="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">Stage Definitions</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg hover-lift flex items-start">
                    <div class="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl mr-6 flex-shrink-0">
                        3
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-3">Training & Rollout (Week 5-6)</h3>
                        <p class="text-gray-700 mb-4">Train your team on the new frameworks. Weekly coaching sessions, live deal reviews, and QA calls to ensure adoption and correct execution.</p>
                        <div class="flex flex-wrap gap-3">
                            <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Team Training</span>
                            <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Deal Reviews</span>
                            <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Live Coaching</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg hover-lift flex items-start">
                    <div class="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl mr-6 flex-shrink-0">
                        4
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-3">Optimization & Scale (Month 2-6)</h3>
                        <p class="text-gray-700 mb-4">Iterate based on data. Refine messaging, optimize sequences, improve conversion points. Build the machine that runs without you having to micromanage.</p>
                        <div class="flex flex-wrap gap-3">
                            <span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Data Analysis</span>
                            <span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Message Testing</span>
                            <span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Conversion Optimization</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black mb-4">
                    What Leaders Say
                </h2>
                <p class="text-xl text-gray-600">
                    Founders and CEOs who've worked with us
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
                <div class="testimonial-card p-8 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                            JM
                        </div>
                        <div>
                            <p class="font-bold text-gray-800">Jason Mitchell</p>
                            <p class="text-gray-600">CEO, Technology Company</p>
                        </div>
                    </div>
                    <div class="mb-4">
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                    </div>
                    <p class="text-gray-700 italic mb-4">
                        "We were stuck at $800K revenue for 8 months. GSD Associates came in, rebuilt our entire sales motion, and we hit $2.1M within 6 months. The ROI was immediate and undeniable."
                    </p>
                    <p class="text-sm text-gray-500">Growing tech company • 12-person sales team</p>
                </div>
                
                <div class="testimonial-card p-8 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                            SK
                        </div>
                        <div>
                            <p class="font-bold text-gray-800">Sarah Kim</p>
                            <p class="text-gray-600">VP of Sales, Industrial Services</p>
                        </div>
                    </div>
                    <div class="mb-4">
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                    </div>
                    <p class="text-gray-700 italic mb-4">
                        "Our sales reps were freestyling every discovery call. GSD built us a framework that's now part of our DNA. Win rate went from 22% to 39% in one quarter. Game-changing."
                    </p>
                    <p class="text-sm text-gray-500">Mid-market company • 25-person sales org</p>
                </div>
                
                <div class="testimonial-card p-8 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                            DA
                        </div>
                        <div>
                            <p class="font-bold text-gray-800">David Anderson</p>
                            <p class="text-gray-600">Founder, Professional Services</p>
                        </div>
                    </div>
                    <div class="mb-4">
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                    </div>
                    <p class="text-gray-700 italic mb-4">
                        "I couldn't afford a full-time VP of Sales, but I couldn't afford NOT to have one either. The fractional model was perfect—elite expertise without the $250K+ commitment."
                    </p>
                    <p class="text-sm text-gray-500">Growing business • 5-person team</p>
                </div>
                
                <div class="testimonial-card p-8 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                            MC
                        </div>
                        <div>
                            <p class="font-bold text-gray-800">Maria Chen</p>
                            <p class="text-gray-600">CRO, Enterprise Software</p>
                        </div>
                    </div>
                    <div class="mb-4">
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                    </div>
                    <p class="text-gray-700 italic mb-4">
                        "Pipeline quality was our biggest issue—too many thin opps that went nowhere. GSD Associates tightened our qualification and handoff process. Now every opp in our CRM is real."
                    </p>
                    <p class="text-sm text-gray-500">Enterprise company • 40-person GTM team</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Different Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black mb-4">
                    Why We're Different
                </h2>
                <p class="text-xl text-gray-600">
                    Not just another sales consultant
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white p-8 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                            <i class="fas fa-trophy text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold">Proven Track Record</h3>
                    </div>
                    <p class="text-gray-700">From startups to enterprise, across tech, manufacturing, professional services, and more. Whether you're scaling rapidly or entering new markets, we've done it before and know what works.</p>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="bg-slate-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                            <i class="fas fa-sync text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold">End-to-End Capability</h3>
                    </div>
                    <p class="text-gray-700">From sales playbooks to training programs, from process metrics to go-to-market plans—we cover it. No need for multiple consultants.</p>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                            <i class="fas fa-target text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold">Results-Oriented</h3>
                    </div>
                    <p class="text-gray-700">When stakes are high (major contracts, aggressive growth targets, market expansion), you need action, accountability, and measurable outcomes—not just advice.</p>
                </div>
                
                <div class="bg-white p-8 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                            <i class="fas fa-chart-pie text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold">Flexible & Scalable</h3>
                    </div>
                    <p class="text-gray-700">Our fractional model lets you pay for what you need, when you need it. Focus capital on growth, not overhead.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black mb-4">
                    Common Questions
                </h2>
            </div>
            
            <div class="space-y-6">
                <div class="bg-gray-50 p-6 rounded-xl hover-lift cursor-pointer" onclick="toggleFAQ(this)">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold text-gray-800">How is fractional different from hiring a full-time VP of Sales?</h3>
                        <i class="fas fa-chevron-down text-orange-600 transition-transform"></i>
                    </div>
                    <div class="faq-answer hidden mt-4 text-gray-700">
                        <p>A fractional VP of Sales gives you executive-level expertise at 30-40% of the cost of a full-time hire. You get someone who's done it before, without the 6-month hiring process, $200K+ salary, equity, and risk of a bad fit. Perfect for companies that need VP-level strategy and execution but aren't ready for or can't afford a full-time executive.</p>
                    </div>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-xl hover-lift cursor-pointer" onclick="toggleFAQ(this)">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold text-gray-800">What size companies do you work with?</h3>
                        <i class="fas fa-chevron-down text-orange-600 transition-transform"></i>
                    </div>
                    <div class="faq-answer hidden mt-4 text-gray-700">
                        <p>We work with B2B companies across industries—technology, manufacturing, professional services, healthcare, financial services, and more. Typically, our clients have 5-50 person sales teams and are scaling their revenue. If you need to build or optimize a repeatable sales engine, we can help.</p>
                    </div>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-xl hover-lift cursor-pointer" onclick="toggleFAQ(this)">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold text-gray-800">How long does a typical engagement last?</h3>
                        <i class="fas fa-chevron-down text-orange-600 transition-transform"></i>
                    </div>
                    <div class="faq-answer hidden mt-4 text-gray-700">
                        <p>Most fractional VP engagements run 3-6 months. Consulting projects can be 1-3 months depending on scope. We start seeing measurable impact within the first 30 days, with full transformation typically achieved by month 3-4.</p>
                    </div>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-xl hover-lift cursor-pointer" onclick="toggleFAQ(this)">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold text-gray-800">What if we already have a sales leader?</h3>
                        <i class="fas fa-chevron-down text-orange-600 transition-transform"></i>
                    </div>
                    <div class="faq-answer hidden mt-4 text-gray-700">
                        <p>Perfect! We often work alongside existing sales leaders to build out specific capabilities—like SDR systems, discovery frameworks, or enterprise sales motions. We can also provide coaching and mentorship to help your current leader level up their skills.</p>
                    </div>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-xl hover-lift cursor-pointer" onclick="toggleFAQ(this)">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold text-gray-800">How quickly can you start?</h3>
                        <i class="fas fa-chevron-down text-orange-600 transition-transform"></i>
                    </div>
                    <div class="faq-answer hidden mt-4 text-gray-700">
                        <p>Typically within 2-3 weeks from our initial strategy call. We move fast because we know you're racing against your runway and board expectations.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA Section -->
    <section class="gradient-bg py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center text-white">
            <h2 class="text-4xl md:text-5xl font-black mb-6">
                Ready to Build a Sales Engine That Scales?
            </h2>
            <p class="text-xl mb-8 text-gray-100">
                Book a free 30-minute strategy call. No obligation. Just a conversation about where you are, where you want to go, and how we can help you get there faster.
            </p>
            
            <div class="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border-2 border-white/20 mb-8">
                <div class="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                        <i class="fas fa-calendar-check text-4xl mb-2"></i>
                        <p class="font-semibold">30-Minute Call</p>
                        <p class="text-sm text-gray-200">Quick but thorough</p>
                    </div>
                    <div>
                        <i class="fas fa-comments text-4xl mb-2"></i>
                        <p class="font-semibold">Tailored Insights</p>
                        <p class="text-sm text-gray-200">Specific to your situation</p>
                    </div>
                    <div>
                        <i class="fas fa-handshake text-4xl mb-2"></i>
                        <p class="font-semibold">No Obligation</p>
                        <p class="text-sm text-gray-200">Just valuable advice</p>
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://gsdassociatesmeeting.as.me/" target="_blank" class="bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition shadow-2xl inline-block">
                    <i class="fas fa-calendar-check mr-2"></i>
                    Book Your Free Strategy Call Now
                </a>
                <button onclick="openModal()" class="border-2 border-white text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-blue-900 transition">
                    <i class="fas fa-envelope mr-2"></i>
                    Send Message
                </button>
            </div>
            <p class="text-sm text-gray-200 mt-4">Available this week • 30-minute commitment • Immediate value</p>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h3 class="text-2xl font-bold gradient-text mb-4">GSD Associates</h3>
                    <p class="text-gray-400">Elite sales leadership for growing B2B companies</p>
                    <p class="text-gray-400 mt-4">
                        <i class="fas fa-envelope mr-2"></i>
                        <a href="mailto:gsdassociatesllc@gmail.com" class="hover:text-white transition">gsdassociatesllc@gmail.com</a>
                    </p>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">Services</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#services" class="hover:text-white transition">Sales Consulting</a></li>
                        <li><a href="#services" class="hover:text-white transition">Fractional VP of Sales</a></li>
                        <li><a href="#services" class="hover:text-white transition">Process Development</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">Company</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#results" class="hover:text-white transition">Case Studies</a></li>
                        <li><a href="#testimonials" class="hover:text-white transition">Testimonials</a></li>
                        <li><a href="#process" class="hover:text-white transition">Our Process</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">Get Started</h4>
                    <button onclick="openModal()" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition w-full">
                        Book Strategy Call
                    </button>
                </div>
            </div>
            
            <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
                <p>&copy; 2026 GSD Associates. All rights reserved. Built to scale your revenue.</p>
            </div>
        </div>
    </footer>

    <!-- Contact Modal -->
    <div id="contactModal" class="modal">
        <div class="modal-content">
            <div class="gradient-bg text-white p-8 rounded-t-2xl">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2 class="text-3xl font-bold mb-2">Send Us a Message</h2>
                <p class="text-gray-100">We'll respond within 24 hours or <a href="https://gsdassociatesmeeting.as.me/" target="_blank" class="underline hover:text-yellow-300">book a call now</a></p>
            </div>
            
            <form id="contactForm" class="p-8">
                <div class="mb-6">
                    <label class="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input type="text" name="name" required class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                </div>
                
                <div class="mb-6">
                    <label class="block text-gray-700 font-semibold mb-2">Business Email *</label>
                    <input type="email" name="email" required class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                </div>
                
                <div class="mb-6">
                    <label class="block text-gray-700 font-semibold mb-2">Company Name *</label>
                    <input type="text" name="company" required class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                </div>
                
                <div class="mb-6">
                    <label class="block text-gray-700 font-semibold mb-2">Annual Revenue *</label>
                    <select name="arr" required class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                        <option value="">Select range...</option>
                        <option value="<500K">Less than $500K</option>
                        <option value="500K-1M">$500K - $1M</option>
                        <option value="1M-5M">$1M - $5M</option>
                        <option value="5M-10M">$5M - $10M</option>
                        <option value="10M+">$10M+</option>
                    </select>
                </div>
                
                <div class="mb-6">
                    <label class="block text-gray-700 font-semibold mb-2">Sales Team Size *</label>
                    <select name="teamSize" required class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                        <option value="">Select size...</option>
                        <option value="1-5">1-5 people</option>
                        <option value="6-10">6-10 people</option>
                        <option value="11-20">11-20 people</option>
                        <option value="21-50">21-50 people</option>
                        <option value="50+">50+ people</option>
                    </select>
                </div>
                
                <div class="mb-6">
                    <label class="block text-gray-700 font-semibold mb-2">Biggest Challenge *</label>
                    <textarea name="challenge" rows="4" required class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="What's the #1 thing holding your sales team back?"></textarea>
                </div>
                
                <button type="submit" class="cta-button text-white px-8 py-4 rounded-full font-bold text-lg w-full">
                    <i class="fas fa-paper-plane mr-2"></i>
                    Send My Request
                </button>
                
                <p class="text-sm text-gray-500 text-center mt-4">We'll respond within 24 hours to schedule your call</p>
            </form>
        </div>
    </div>

    <script>
        // Mobile menu toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }
        
        // Modal functions
        function openModal() {
            document.getElementById('contactModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal() {
            document.getElementById('contactModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('contactModal');
            if (event.target == modal) {
                closeModal();
            }
        }
        
        // FAQ toggle
        function toggleFAQ(element) {
            const answer = element.querySelector('.faq-answer');
            const icon = element.querySelector('.fa-chevron-down');
            
            if (answer && icon) {
                answer.classList.toggle('hidden');
                icon.style.transform = answer.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            }
        }
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            const submitButton = e.target.querySelector('button[type="submit"]');
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            submitButton.disabled = true;
            
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                if (response.ok) {
                    alert("Thank you! We'll respond within 24 hours. Or book a call instantly at gsdassociatesmeeting.as.me");
                    closeModal();
                    e.target.reset();
                } else {
                    alert("Something went wrong. Please email us directly at gsdassociatesllc@gmail.com or try again.");
                }
            } catch (error) {
                alert("Something went wrong. Please email us directly at gsdassociatesllc@gmail.com or try again.");
            } finally {
                submitButton.innerHTML = '<i class="fas fa-paper-plane mr-2"></i>Send My Request';
                submitButton.disabled = false;
            }
        });
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobileMenu');
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
    </script>
</body>
</html>
  `)
})

// Contact form API endpoint
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    
    // Log submission for debugging
    console.log('Contact form submission:', body)
    
    // Get environment variable for Resend API key
    // @ts-ignore - Cloudflare env binding
    const RESEND_API_KEY = c.env?.RESEND_API_KEY
    
    // Send email notification via Resend
    if (RESEND_API_KEY) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'GSD Associates Website <onboarding@resend.dev>', // Will use Resend default domain initially
            to: ['gsdassociatesllc@gmail.com'],
            subject: `New Contact Form Submission from ${body.name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              <p><strong>Company:</strong> ${body.company}</p>
              <p><strong>Annual Revenue:</strong> ${body.arr}</p>
              <p><strong>Team Size:</strong> ${body.teamSize}</p>
              <p><strong>Biggest Challenge:</strong></p>
              <p>${body.challenge}</p>
              <hr>
              <p><small>Submitted from: gsdassociates.net</small></p>
            `
          })
        })
        
        if (!emailResponse.ok) {
          console.error('Resend API error:', await emailResponse.text())
          // Still return success to user - they got the confirmation with your email/calendly
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError)
        // Still return success to user
      }
    } else {
      console.warn('RESEND_API_KEY not configured - email not sent')
    }
    
    return c.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    })
  } catch (error) {
    console.error('Form processing error:', error)
    return c.json({ 
      success: false, 
      message: 'Error processing form' 
    }, 500)
  }
})

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
app.get('/about', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Michael Flournoy - GSD Associates | Fractional VP of Sales</title>
    <meta name="description" content="Michael Flournoy is the founder of GSD Associates — a B2B sales executive who has built and led sales teams across multiple industries. Based in the Charlotte, NC area.">
    <link rel="canonical" href="https://www.gsdassociates.net/about">
    <meta property="og:title" content="About Michael Flournoy - GSD Associates">
    <meta property="og:description" content="B2B sales executive, fractional VP of Sales, founder of GSD Associates. Built and led sales teams across SaaS, industrial services, and professional services.">
    <meta property="og:url" content="https://www.gsdassociates.net/about">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="GSD Associates">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="About Michael Flournoy - GSD Associates">
    <meta name="twitter:site" content="@GSDAssociates">
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"Person","name":"Michael Flournoy","jobTitle":"Founder & Fractional VP of Sales","worksFor":{"@type":"Organization","name":"GSD Associates","url":"https://www.gsdassociates.net"},"address":{"@type":"PostalAddress","addressLocality":"Tega Cay","addressRegion":"SC","addressCountry":"US"},"email":"gsdassociatesllc@gmail.com","url":"https://www.gsdassociates.net/about"}</script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>* { font-family: 'Inter', sans-serif; line-height: 1.7; } .gradient-bg { background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); } .gradient-text { background: linear-gradient(135deg, #1e3a8a 0%, #f97316 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; } .cta-box { background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); } .principle-card { background: white; border-left: 4px solid #2563eb; border-radius: 0 12px 12px 0; padding: 1.5rem; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }</style>
</head>
<body class="bg-gray-50">
    <nav class="fixed w-full bg-white shadow-lg z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <a href="/" class="text-2xl font-bold gradient-text">GSD Associates</a>
                <div class="hidden md:flex space-x-6">
                    <a href="/" class="text-gray-700 hover:text-blue-700 font-medium">Home</a>
                    <a href="/services/fractional-vp-of-sales" class="text-gray-700 hover:text-blue-700 font-medium">Services</a>
                    <a href="/blog" class="text-gray-700 hover:text-blue-700 font-medium">Blog</a>
                    <a href="/resources" class="text-gray-700 hover:text-blue-700 font-medium">Resources</a>
                    <a href="/about" class="text-blue-700 font-bold border-b-2 border-blue-700">About</a>
                    <a href="https://calendly.com/gsdassociatesllc/30min" target="_blank" class="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600">Free Strategy Call</a>
                </div>
            </div>
        </div>
    </nav>
    <section class="gradient-bg pt-32 pb-20 px-4">
        <div class="max-w-5xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="text-white">
                    <p class="text-orange-300 font-bold uppercase tracking-widest mb-3">About GSD Associates</p>
                    <h1 class="text-4xl md:text-5xl font-black mb-6 leading-tight">Built by a Sales Leader Who's Done the Work</h1>
                    <p class="text-xl text-blue-100 mb-8">GSD Associates exists because I got tired of watching great companies leave revenue on the table — not because their product wasn't good, but because nobody had built the sales system underneath it.</p>
                    <a href="https://calendly.com/gsdassociatesllc/30min" target="_blank" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl inline-block">Book a Free Strategy Call</a>
                </div>
                <div class="hidden md:block">
                    <div class="bg-white/10 rounded-2xl p-8 text-white text-center">
                        <div class="w-24 h-24 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center"><span class="text-4xl font-black">MF</span></div>
                        <p class="text-xl font-bold">Michael Flournoy</p>
                        <p class="text-blue-200">Founder & Fractional VP of Sales</p>
                        <p class="text-blue-200 text-sm mt-1">Charlotte, NC Area</p>
                        <div class="mt-4 pt-4 border-t border-white/20"><a href="https://www.linkedin.com/in/mikeflournoy/" target="_blank" class="text-blue-200 hover:text-white text-sm"><i class="fab fa-linkedin mr-2"></i>Connect on LinkedIn</a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-white py-10 px-4 shadow-sm">
        <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="bg-gray-50 rounded-xl p-5 text-center"><p class="text-3xl font-black text-blue-700">3–5x</p><p class="text-gray-500 text-sm mt-1">Pipeline Growth</p></div>
            <div class="bg-gray-50 rounded-xl p-5 text-center"><p class="text-3xl font-black text-blue-700">40%+</p><p class="text-gray-500 text-sm mt-1">Conversion Lift</p></div>
            <div class="bg-gray-50 rounded-xl p-5 text-center"><p class="text-3xl font-black text-blue-700">65%</p><p class="text-gray-500 text-sm mt-1">Cost vs. Full-Time VP</p></div>
            <div class="bg-gray-50 rounded-xl p-5 text-center"><p class="text-3xl font-black text-blue-700">30d</p><p class="text-gray-500 text-sm mt-1">Time to Impact</p></div>
        </div>
    </section>
    <section class="py-20 px-4">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-black text-gray-900 mb-6">My Story</h2>
            <div class="space-y-5 text-gray-700 text-lg">
                <p>I've spent my career in the trenches of B2B sales — not as an academic, not as a strategy guy who's never carried a bag, but as someone who built and led sales teams from the ground up. I've hired reps, fired reps, rebuilt broken processes, and had the uncomfortable conversations that come with accountability-driven leadership.</p>
                <p>What I kept seeing, across every industry and company size, was the same pattern: great founders with great products, hitting a ceiling they couldn't break through — because sales was being run on gut instinct instead of a repeatable system.</p>
                <p>The obvious answer was to hire a VP of Sales. But at $200K+ salary, six months to find one, and the very real risk of a bad hire — that's not accessible to most companies at the $1M–$10M stage.</p>
                <p>So I started GSD Associates to bridge that gap. The name says everything: Get Stuff Done. Not slide decks and recommendations. Execution, accountability, and measurable results — starting in the first 30 days.</p>
            </div>
        </div>
    </section>
    <section class="bg-gray-100 py-20 px-4">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-black text-gray-900 mb-8">How I Work</h2>
            <div class="principle-card"><h3 class="text-xl font-bold text-blue-900 mb-2">Operators, Not Advisors</h3><p class="text-gray-700 mb-0">I get in the trenches — sitting in on calls, running pipeline reviews, coaching reps live. Advice is cheap. Execution moves the number.</p></div>
            <div class="principle-card"><h3 class="text-xl font-bold text-blue-900 mb-2">Accountability Over Comfort</h3><p class="text-gray-700 mb-0">I'll tell you what I actually think. If your reps aren't performing, I'll say so. Comfortable conversations don't move revenue.</p></div>
            <div class="principle-card"><h3 class="text-xl font-bold text-blue-900 mb-2">Systems Over Heroics</h3><p class="text-gray-700 mb-0">The goal is to build a sales system that works without me — documented, repeatable, scalable. You should be stronger after I leave.</p></div>
            <div class="principle-card"><h3 class="text-xl font-bold text-blue-900 mb-2">Speed Matters</h3><p class="text-gray-700 mb-0">Every month without a functioning sales system is lost revenue you'll never get back. Week one is diagnostic. By day 30, something measurable has changed.</p></div>
        </div>
    </section>
    <section class="cta-box py-16 px-4">
        <div class="max-w-4xl mx-auto text-center text-white">
            <h2 class="text-3xl font-black mb-4">Let's Talk About Your Sales Challenges</h2>
            <p class="text-xl mb-8 text-blue-100">Book a free 30-minute strategy call. No pitch — just a real conversation about where you are and what's possible.</p>
            <a href="https://calendly.com/gsdassociatesllc/30min" target="_blank" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl text-lg inline-block">Schedule Your Free Call →</a>
        </div>
    </section>
    <footer class="bg-gray-900 text-gray-400 py-10 px-4 text-center">
        <p class="text-lg font-bold text-white mb-2">GSD Associates</p>
        <p class="mb-4">Executive-Level Sales Leadership for Growing B2B Companies</p>
        <p class="text-sm">© 2026 GSD Associates. All rights reserved. | <a href="mailto:gsdassociatesllc@gmail.com" class="hover:text-white">gsdassociatesllc@gmail.com</a></p>
    </footer>
</body></html>`)
})

// ─── BLOG POST HELPER ─────────────────────────────────────────────────────────
function blogPost(slug: string, title: string, category: string, date: string, readTime: string, metaDesc: string, bodyHtml: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - GSD Associates</title>
    <meta name="description" content="${metaDesc}">
    <link rel="canonical" href="https://www.gsdassociates.net/blog/${slug}">
    <meta property="og:title" content="${title} - GSD Associates">
    <meta property="og:description" content="${metaDesc}">
    <meta property="og:url" content="https://www.gsdassociates.net/blog/${slug}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="GSD Associates">
    <meta property="og:image" content="https://www.gsdassociates.net/logo.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${metaDesc}">
    <meta name="twitter:site" content="@GSDAssociates">
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"BlogPosting","headline":"${title}","author":{"@type":"Person","name":"Michael Flournoy"},"publisher":{"@type":"Organization","name":"GSD Associates","url":"https://www.gsdassociates.net"},"datePublished":"2026-03-01","description":"${metaDesc}"}</script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>* { font-family: 'Inter', sans-serif; line-height: 1.7; } .gradient-text { background: linear-gradient(135deg, #1e3a8a 0%, #f97316 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; } .article-content h2 { font-size: 1.75rem; font-weight: 800; margin-top: 2.5rem; margin-bottom: 1rem; color: #1e3a8a; } .article-content h3 { font-size: 1.25rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem; color: #1e3a8a; } .article-content p { margin-bottom: 1.25rem; color: #374151; font-size: 1.05rem; } .article-content ul,.article-content ol { margin-bottom: 1.5rem; padding-left: 2rem; } .article-content li { margin-bottom: 0.5rem; color: #374151; } .article-content strong { color: #1e3a8a; font-weight: 700; } .cta-box { background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); } .stat-callout { background: #f0f7ff; border-left: 4px solid #2563eb; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0 8px 8px 0; }</style>
</head>
<body class="bg-gray-50">
    <nav class="fixed w-full bg-white shadow-lg z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <a href="/" class="text-2xl font-bold gradient-text">GSD Associates</a>
                <div class="hidden md:flex space-x-6">
                    <a href="/" class="text-gray-700 hover:text-blue-700 font-medium">Home</a>
                    <a href="/services/fractional-vp-of-sales" class="text-gray-700 hover:text-blue-700 font-medium">Services</a>
                    <a href="/blog" class="text-blue-700 font-bold border-b-2 border-blue-700">Blog</a>
                    <a href="/resources" class="text-gray-700 hover:text-blue-700 font-medium">Resources</a>
                    <a href="/about" class="text-gray-700 hover:text-blue-700 font-medium">About</a>
                    <a href="https://calendly.com/gsdassociatesllc/30min" target="_blank" class="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600">Free Strategy Call</a>
                </div>
            </div>
        </div>
    </nav>
    <article class="pt-32 pb-20 px-4">
        <div class="max-w-4xl mx-auto">
            <div class="mb-8"><a href="/blog" class="text-blue-700 hover:text-orange-600 font-semibold"><i class="fas fa-arrow-left mr-2"></i>Back to Blog</a></div>
            <header class="mb-12">
                <div class="text-sm text-orange-600 font-bold mb-3 uppercase tracking-wide">${category}</div>
                <h1 class="text-4xl md:text-5xl font-black mb-4 text-gray-900 leading-tight">${title}</h1>
                <div class="flex flex-wrap items-center text-gray-500 text-sm gap-4">
                    <span>By <strong class="text-gray-700">Michael Flournoy</strong></span>
                    <span>•</span><span>${date}</span><span>•</span><span>${readTime}</span>
                </div>
            </header>
            <div class="article-content">${bodyHtml}</div>
        </div>
    </article>
    <section class="cta-box py-16 px-4">
        <div class="max-w-4xl mx-auto text-center text-white">
            <h2 class="text-3xl font-black mb-4">Ready to Build a Sales Engine That Scales?</h2>
            <p class="text-xl mb-8 text-blue-100">Book a free 30-minute strategy call. No pitch. Just a real conversation about your pipeline.</p>
            <a href="https://calendly.com/gsdassociatesllc/30min" target="_blank" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl text-lg inline-block">Schedule Your Free Call →</a>
        </div>
    </section>
    <footer class="bg-gray-900 text-gray-400 py-10 px-4 text-center">
        <p class="text-lg font-bold text-white mb-2">GSD Associates</p>
        <p class="mb-4">Executive-Level Sales Leadership for Growing B2B Companies</p>
        <p class="text-sm">© 2026 GSD Associates. All rights reserved. | <a href="mailto:gsdassociatesllc@gmail.com" class="hover:text-white">gsdassociatesllc@gmail.com</a></p>
    </footer>
</body></html>`
}

// ─── BLOG ROUTES ──────────────────────────────────────────────────────────────

app.get('/blog', (c) => c.html(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sales Leadership Blog - GSD Associates</title>
    <meta name="description" content="Practical sales leadership insights for B2B founders and CEOs. Pipeline management, cold email, fractional VP of Sales, and more.">
    <link rel="canonical" href="https://www.gsdassociates.net/blog">
    <meta property="og:title" content="Sales Leadership Blog - GSD Associates">
    <meta property="og:description" content="Practical sales leadership insights for B2B founders and CEOs.">
    <meta property="og:url" content="https://www.gsdassociates.net/blog">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        .gradient-text { background: linear-gradient(135deg, #1e3a8a, #2563eb); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .cta-button { background: linear-gradient(135deg, #f97316, #ea580c); }
        .card-hover { transition: transform 0.2s, box-shadow 0.2s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.12); }
    </style>
</head>
<body class="bg-gray-50">
    <nav class="fixed w-full bg-white shadow-lg z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <a href="/" class="text-2xl font-bold gradient-text">GSD Associates</a>
                <div class="hidden md:flex space-x-8">
                    <a href="/" class="text-gray-700 hover:text-blue-700 font-medium">Home</a>
                    <a href="/blog" class="text-blue-700 font-bold border-b-2 border-blue-700">Blog</a>
                    <a href="/about" class="text-gray-700 hover:text-blue-700 font-medium">About</a>
                    <a href="https://calendly.com/gsdassociatesllc/30min" target="_blank" class="cta-button text-white px-6 py-2 rounded-full font-semibold inline-block">Book Strategy Call</a>
                </div>
                <div class="md:hidden">
                    <button onclick="document.getElementById('blogMobileMenu').classList.toggle('hidden')" class="text-gray-700">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
        <div id="blogMobileMenu" class="hidden md:hidden bg-white border-t">
            <div class="px-4 py-4 space-y-3">
                <a href="/" class="block text-gray-700 hover:text-blue-700 font-medium">Home</a>
                <a href="/blog" class="block text-blue-700 font-bold">Blog</a>
                <a href="/about" class="block text-gray-700 hover:text-blue-700 font-medium">About</a>
                <a href="https://calendly.com/gsdassociatesllc/30min" target="_blank" class="cta-button text-white px-6 py-3 rounded-full font-semibold w-full block text-center">Book Strategy Call</a>
            </div>
        </div>
    </nav>

    <div class="pt-28 pb-16">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-14">
                <p class="text-orange-500 font-bold uppercase tracking-widest mb-3">Insights & Resources</p>
                <h1 class="text-5xl font-black text-gray-900 mb-4">Sales Leadership <span class="gradient-text">Blog</span></h1>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">Practical tactics for B2B founders and CEOs ready to scale revenue without guessing.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <a href="/blog/how-much-does-fractional-vp-of-sales-cost" class="bg-white rounded-2xl shadow-md overflow-hidden card-hover block">
                    <div class="bg-gradient-to-br from-blue-900 to-blue-700 p-6 h-36 flex items-end">
                        <span class="text-orange-300 text-xs font-bold uppercase tracking-widest">Pricing</span>
                    </div>
                    <div class="p-6">
                        <h2 class="text-lg font-bold text-gray-900 mb-2 leading-snug">How Much Does a Fractional VP of Sales Cost?</h2>
                        <p class="text-gray-500 text-sm mb-4">The real numbers — from day rates to monthly retainers. Know exactly what to budget.</p>
                        <div class="flex items-center justify-between text-xs text-gray-400">
                            <span>March 2026</span><span>8 min read</span>
                        </div>
                    </div>
                </a>

                <a href="/blog/signs-you-need-fractional-vp-of-sales" class="bg-white rounded-2xl shadow-md overflow-hidden card-hover block">
                    <div class="bg-gradient-to-br from-blue-900 to-blue-700 p-6 h-36 flex items-end">
                        <span class="text-orange-300 text-xs font-bold uppercase tracking-widest">Leadership</span>
                    </div>
                    <div class="p-6">
                        <h2 class="text-lg font-bold text-gray-900 mb-2 leading-snug">7 Signs You Need a Fractional VP of Sales</h2>
                        <p class="text-gray-500 text-sm mb-4">Pipeline stalled? Reps underperforming? Here are the 7 red flags founders ignore too long.</p>
                        <div class="flex items-center justify-between text-xs text-gray-400">
                            <span>March 2026</span><span>9 min read</span>
                        </div>
                    </div>
                </a>

                <a href="/blog/b2b-sales-pipeline-management" class="bg-white rounded-2xl shadow-md overflow-hidden card-hover block">
                    <div class="bg-gradient-to-br from-blue-900 to-blue-700 p-6 h-36 flex items-end">
                        <span class="text-orange-300 text-xs font-bold uppercase tracking-widest">Pipeline</span>
                    </div>
                    <div class="p-6">
                        <h2 class="text-lg font-bold text-gray-900 mb-2 leading-snug">B2B Sales Pipeline Management: The Complete Guide</h2>
                        <p class="text-gray-500 text-sm mb-4">Build a pipeline that converts. Stage definitions, velocity tracking, and how to fix leaks.</p>
                        <div class="flex items-center justify-between text-xs text-gray-400">
                            <span>March 2026</span><span>12 min read</span>
                        </div>
                    </div>
                </a>

                <a href="/blog/saas-sales-process" class="bg-white rounded-2xl shadow-md overflow-hidden card-hover block">
                    <div class="bg-gradient-to-br from-blue-900 to-blue-700 p-6 h-36 flex items-end">
                        <span class="text-orange-300 text-xs font-bold uppercase tracking-widest">SaaS</span>
                    </div>
                    <div class="p-6">
                        <h2 class="text-lg font-bold text-gray-900 mb-2 leading-snug">The SaaS Sales Process That Closes More Deals</h2>
                        <p class="text-gray-500 text-sm mb-4">A repeatable 7-stage process built for SaaS — from first touch to expansion revenue.</p>
                        <div class="flex items-center justify-between text-xs text-gray-400">
                            <span>March 2026</span><span>10 min read</span>
                        </div>
                    </div>
                </a>

                <a href="/blog/how-to-build-b2b-sales-team" class="bg-white rounded-2xl shadow-md overflow-hidden card-hover block">
                    <div class="bg-gradient-to-br from-blue-900 to-blue-700 p-6 h-36 flex items-end">
                        <span class="text-orange-300 text-xs font-bold uppercase tracking-widest">Team Building</span>
                    </div>
                    <div class="p-6">
                        <h2 class="text-lg font-bold text-gray-900 mb-2 leading-snug">How to Build a B2B Sales Team from Scratch</h2>
                        <p class="text-gray-500 text-sm mb-4">AE or SDR first? What comp plan? How to hire, onboard, and scale a team that actually performs.</p>
                        <div class="flex items-center justify-between text-xs text-gray-400">
                            <span>March 2026</span><span>11 min read</span>
                        </div>
                    </div>
                </a>

                <a href="/blog/cold-email-b2b" class="bg-white rounded-2xl shadow-md overflow-hidden card-hover block">
                    <div class="bg-gradient-to-br from-blue-900 to-blue-700 p-6 h-36 flex items-end">
                        <span class="text-orange-300 text-xs font-bold uppercase tracking-widest">Cold Outreach</span>
                    </div>
                    <div class="p-6">
                        <h2 class="text-lg font-bold text-gray-900 mb-2 leading-snug">B2B Cold Email That Actually Gets Replies</h2>
                        <p class="text-gray-500 text-sm mb-4">The 5-step framework behind cold emails that open, reply, and convert to booked meetings.</p>
                        <div class="flex items-center justify-between text-xs text-gray-400">
                            <span>March 2026</span><span>9 min read</span>
                        </div>
                    </div>
                </a>

                <a href="/blog/sales-discovery-call-framework" class="bg-white rounded-2xl shadow-md overflow-hidden card-hover block">
                    <div class="bg-gradient-to-br from-blue-900 to-blue-700 p-6 h-36 flex items-end">
                        <span class="text-orange-300 text-xs font-bold uppercase tracking-widest">Discovery</span>
                    </div>
                    <div class="p-6">
                        <h2 class="text-lg font-bold text-gray-900 mb-2 leading-snug">The Sales Discovery Call Framework That Closes Deals</h2>
                        <p class="text-gray-500 text-sm mb-4">Stop pitching on the first call. Use this framework to uncover pain, build urgency, and win.</p>
                        <div class="flex items-center justify-between text-xs text-gray-400">
                            <span>March 2026</span><span>10 min read</span>
                        </div>
                    </div>
                </a>

                <a href="/blog/fractional-vp-sales-vs-sales-consultant" class="bg-white rounded-2xl shadow-md overflow-hidden card-hover block">
                    <div class="bg-gradient-to-br from-blue-900 to-blue-700 p-6 h-36 flex items-end">
                        <span class="text-orange-300 text-xs font-bold uppercase tracking-widest">Comparison</span>
                    </div>
                    <div class="p-6">
                        <h2 class="text-lg font-bold text-gray-900 mb-2 leading-snug">Fractional VP of Sales vs. Sales Consultant: Which Do You Need?</h2>
                        <p class="text-gray-500 text-sm mb-4">Know the difference before you hire. One runs your team, one advises it — here is how to choose.</p>
                        <div class="flex items-center justify-between text-xs text-gray-400">
                            <span>March 2026</span><span>7 min read</span>
                        </div>
                    </div>
                </a>

            </div>

            <div class="mt-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-10 text-center text-white">
                <h2 class="text-3xl font-black mb-3">Ready to Fix Your Sales?</h2>
                <p class="text-blue-200 text-lg mb-6">30 minutes. No pitch. Just a straight answer on what your sales team needs.</p>
                <a href="https://calendly.com/gsdassociatesllc/30min" target="_blank" class="cta-button text-white px-10 py-4 rounded-full font-bold text-lg inline-block">Book a Free Strategy Call</a>
            </div>
        </div>
    </div>
</body>
</html>`));

app.get('/blog/how-much-does-fractional-vp-of-sales-cost', (c) => c.html(blogPost(
  'how-much-does-fractional-vp-of-sales-cost',
  'How Much Does a Fractional VP of Sales Cost? (2026 Pricing Guide)',
  'Pricing', 'March 2026', '8 min read',
  'Fractional VP of Sales pricing ranges from $3K–$15K/month. Here is the full 2026 breakdown — what drives cost, ROI math, and how it compares to a full-time VP hire.',
  `<p>If you are considering hiring a fractional VP of Sales, the first question is always: what does it actually cost? The honest answer is it depends — but in a way that is actually useful to understand.</p>
  <div class="stat-callout"><p class="font-bold text-blue-900 mb-1">2026 Pricing Range</p><p class="text-gray-700 mb-0">Fractional VP of Sales engagements typically range from <strong>$3,000 to $15,000 per month</strong>, with most B2B companies at the $1M–$10M stage investing $5,000–$8,000/month for a meaningful engagement.</p></div>
  <h2>What Drives the Cost</h2>
  <p>Four factors determine where you land in the range:</p>
  <ul><li><strong>Hours committed per month:</strong> A light advisory engagement (5–10 hours/month) costs less than an embedded leadership role (20–40 hours/month). Know what you actually need.</li><li><strong>Scope of work:</strong> Building a sales playbook from scratch, managing reps, running weekly pipeline reviews, and owning hiring decisions is more involved than advisory check-ins.</li><li><strong>Experience level:</strong> Someone who has scaled a SaaS company from $2M to $20M commands more than a generalist consultant with limited track record.</li><li><strong>Engagement duration:</strong> Shorter engagements (1–3 months) are often priced at a premium. Longer commitments (6–12 months) typically come with better rates.</li></ul>
  <h2>The Full-Time VP Comparison</h2>
  <p>A full-time VP of Sales in 2026 costs:</p>
  <ul><li>Base salary: $150,000–$220,000</li><li>Variable compensation (OTE): $250,000–$350,000 total</li><li>Equity: typically 0.5–1.5%</li><li>Benefits, payroll taxes, recruiting fees: add another $30,000–$50,000</li><li>Time to hire: 3–6 months</li><li>Time to full productivity: another 3–6 months</li></ul>
  <p>Total first-year cost: <strong>$300,000–$450,000+</strong>, with no guarantee of fit.</p>
  <p>A fractional VP at $6,000/month for 12 months costs $72,000 — and delivers results in 30 days, not 6–12 months.</p>
  <h2>ROI Math: Does It Pay for Itself?</h2>
  <p>Let us run the numbers on a typical engagement. A company doing $2M ARR with a 20% win rate brings in roughly $400K/year in new business. If a fractional VP improves win rate to 28% — a modest 8-point lift — that is an extra $160,000/year in revenue. At $6,000/month ($72,000/year), the ROI is more than 2:1 in year one alone. Most clients see 3–5x pipeline growth in the first 90 days.</p>
  <h2>What to Look for When Evaluating Options</h2>
  <ul><li>Do they have direct experience in your industry or deal type?</li><li>Can they show specific metrics from past engagements (win rate improvement, pipeline growth, ramp time reduction)?</li><li>Are they operators who will run your pipeline reviews and coach reps — or advisors who will hand you a deck?</li><li>Do they commit to a minimum number of hours per month?</li></ul>
  <p>At <a href="/services/fractional-vp-of-sales" class="text-blue-700 font-semibold">GSD Associates</a>, our engagements are scoped based on what you actually need — from focused advisory to fully embedded leadership. Book a call below and we will give you a specific recommendation and pricing for your situation.</p>`
)))

app.get('/blog/signs-you-need-fractional-vp-of-sales', (c) => c.html(blogPost(
  'signs-you-need-fractional-vp-of-sales',
  '7 Signs Your B2B Company Needs a Fractional VP of Sales Right Now',
  'Sales Leadership', 'March 2026', '7 min read',
  'Is your founder still closing every major deal? Are reps winging discovery calls? Here are 7 signs your B2B company needs fractional sales leadership — and fast.',
  `<p>Most founders wait too long. By the time they admit they need dedicated sales leadership, they have already lost months of pipeline, watched good reps leave for companies that actually invest in them, and burned through runway trying to scale something that was never built to scale.</p>
  <p>Here are the seven signs I see most often — and what each one is actually telling you.</p>
  <h2>Sign 1: You Are Still the Best Closer on Your Team</h2>
  <p>If every major deal still runs through you — if your reps regularly pull you in for tough calls, demos, or negotiations — that is not a rep problem. That is a system problem. The knowledge of what works is in your head, not documented, not taught, not repeatable. You have a ceiling, and it is your own time.</p>
  <div class="stat-callout"><p class="font-bold text-blue-900 mb-1">The founder trap</p><p class="text-gray-700 mb-0">Founders who are still closing deals at $3M+ revenue spend an average of 40% of their time on sales activities. That is 40% that is not going to product, fundraising, hiring, or strategy.</p></div>
  <h2>Sign 2: Reps Are Winging Every Discovery Call</h2>
  <p>Ask five reps to walk you through how they run a discovery call. You will get five different answers. No qualification criteria. No must-ask questions. No framework for uncovering urgency. Just freestyle — every time, every rep. This is the single biggest driver of low win rates and long deal cycles.</p>
  <h2>Sign 3: You Have No Real Pipeline Visibility</h2>
  <p>If your weekly forecast is based on gut feel — "I think Q2 is looking pretty good" — you have a data problem. Real pipeline visibility means you know the dollar value at each stage, the conversion rate between stages, the average deal cycle by segment, and which reps are ahead or behind. Without this, you cannot manage to a number. You can only hope.</p>
  <h2>Sign 4: You Have Been Stuck at the Same Revenue Number for 6+ Months</h2>
  <p>Revenue plateaus are almost never a product problem or a market problem. They are almost always a sales system problem. The company grew to $X on hustle and founder-led selling. The same approach does not scale past that point. Something has to change structurally — and that requires leadership, not more effort.</p>
  <h2>Sign 5: Good Reps Are Leaving (or Not Performing)</h2>
  <p>High turnover in sales is a management and coaching problem, not a hiring problem. If you are cycling through reps every 12–18 months, ask yourself: are they getting weekly 1:1s? Is someone listening to their calls and giving specific feedback? Is there a clear career path? A lack of coaching infrastructure drives the best reps to companies that invest in their development.</p>
  <h2>Sign 6: You Recently Raised or Won a Major Contract</h2>
  <p>Paradoxically, fast growth is one of the biggest warning signs. When revenue doubles quickly, the sales system that got you there is rarely built to handle the next phase. You need someone who can build the infrastructure to sustain and accelerate growth — before the cracks show up in your retention numbers.</p>
  <h2>Sign 7: You Are About to Make a Senior Sales Hire</h2>
  <p>Bringing in a new AE or sales manager without a documented playbook, a coaching framework, and clear success metrics is setting them up to fail. A fractional VP of Sales can build that foundation before you hire — so your first sales leader walks into a working system, not a blank canvas.</p>
  <h2>What to Do Next</h2>
  <p>If three or more of these signs apply to your company, you have a sales leadership gap. The question is how to fill it. A <a href="/blog/fractional-vp-sales-vs-sales-consultant" class="text-blue-700 font-semibold">fractional VP of Sales</a> gives you executive-level leadership at a fraction of the full-time cost, with results starting in 30 days. Book a free strategy call at <a href="https://calendly.com/gsdassociatesllc/30min" class="text-blue-700 font-semibold">GSD Associates</a> and we will tell you exactly where to start.</p>`
)))

app.get('/blog/b2b-sales-pipeline-management', (c) => c.html(blogPost(
  'b2b-sales-pipeline-management',
  'B2B Sales Pipeline Management: The Complete Guide to Never Missing Quota Again',
  'Pipeline', 'March 2026', '10 min read',
  'Stage definitions, qualification criteria, coverage ratios, and weekly review cadence — everything you need to turn your CRM from a graveyard into a revenue engine.',
  `<p>Most B2B sales pipelines are fiction. They are full of deals that will never close, contacts who said "maybe someday," and opportunities that have been sitting in "Proposal Sent" for four months. Managing to that pipeline does not work because the pipeline is not real.</p>
  <p>Building a pipeline that actually predicts revenue comes down to four things: stage definitions, qualification criteria, coverage ratios, and a consistent review cadence. Here is the complete playbook.</p>
  <h2>Stage Definitions: The Foundation of Everything</h2>
  <p>Every pipeline stage needs a clear definition of what must be true for a deal to be in that stage — and what must happen for it to advance. Without this, reps put deals wherever feels optimistic, and you lose all forecasting ability.</p>
  <p>A clean five-stage model:</p>
  <ul><li><strong>Stage 1 — Qualified:</strong> ICP confirmed, pain identified, decision-maker engaged. Exit criteria: discovery call completed.</li><li><strong>Stage 2 — Discovery Complete:</strong> Budget range understood, timeline established, buying process mapped. Exit criteria: written follow-up sent with next steps confirmed.</li><li><strong>Stage 3 — Proposal/Demo:</strong> Formal proposal or demo delivered to economic buyer. Exit criteria: verbal interest in moving forward.</li><li><strong>Stage 4 — Negotiation:</strong> Legal or commercial terms being discussed. Exit criteria: agreement on key terms.</li><li><strong>Stage 5 — Closed Won / Closed Lost:</strong> Contract executed or explicitly lost with reason documented.</li></ul>
  <div class="stat-callout"><p class="font-bold text-blue-900 mb-1">The stage definition test</p><p class="text-gray-700 mb-0">Ask any rep: "What has to be true for a deal to be in Stage 3?" If they cannot answer in 15 seconds, your stage definitions are not real yet.</p></div>
  <h2>Qualification: Keeping the Pipeline Clean</h2>
  <p>The biggest pipeline problem is not that deals do not close — it is that deals that should never have been in the pipeline in the first place. They clog the funnel, distort the forecast, and waste rep time.</p>
  <p>Use a simple qualification framework. I like MEDDIC for complex deals, but for most SMB/mid-market B2B the following four questions are enough:</p>
  <ul><li>Is there a real, quantified pain? (Not "it would be nice to have" — a problem with a cost.)</li><li>Is there budget, or can budget be found?</li><li>Are we talking to the economic buyer, or just a champion?</li><li>Is there a timeline that creates urgency?</li></ul>
  <p>If the answer to any of these is "no" or "I am not sure," the deal either needs more discovery work or it should be disqualified. Disqualifying deals quickly is a skill, not a failure.</p>
  <h2>Coverage Ratios: How Much Pipeline Do You Actually Need?</h2>
  <p>The rule of thumb: you need 3–4x your quota in qualified pipeline to hit your number. If your quarterly quota is $500K, you need $1.5M–$2M in real, qualified deals.</p>
  <p>Why? Because close rates are never 100%. If your average win rate is 25–33%, you need that 3–4x coverage to be confident in your forecast. Deals slip, go dark, or lose to "no decision." Pipeline coverage is your cushion.</p>
  <p>Break this down by rep. Each AE should have at minimum 3x their individual quota in pipeline at any given time. If they are below that, the conversation is not about closing harder — it is about generating more qualified opportunities.</p>
  <h2>The Weekly Pipeline Review: What It Should Actually Look Like</h2>
  <p>Most pipeline reviews are a waste of time because they are really just status updates. "Where are we on Acme?" "Still in proposal." "Okay, next." That is not a review. That is a report.</p>
  <p>A real pipeline review drives action. Here is the structure:</p>
  <ul><li><strong>Start with the number:</strong> What is the rep's current pipeline coverage vs. quota? Are they on track?</li><li><strong>Review deals over a minimum threshold:</strong> Focus on deals above $X ACV — do not spend time on small deals.</li><li><strong>Ask four questions per deal:</strong> What is the buying criteria? Who is the economic buyer? What is their cost of doing nothing? What is the next step and when?</li><li><strong>Make decisions:</strong> Is this deal real? Does it move forward, get disqualified, or need a specific action to unblock it?</li><li><strong>End with commitments:</strong> Each rep leaves with 2–3 specific actions to take this week.</li></ul>
  <h2>CRM Hygiene: The Discipline That Makes Everything Else Work</h2>
  <p>A pipeline review is only as good as the data. Basic CRM hygiene rules:</p>
  <ul><li>Every deal must have a next step with a specific date — no open-ended "following up soon."</li><li>Any deal with no activity in 30 days gets flagged for review.</li><li>Stage changes require a note explaining what changed and why.</li><li>Closed Lost requires a documented reason — this is your most valuable data.</li></ul>
  <p>If this feels like admin overhead, it is — but only until it becomes habit. Reps who keep tight CRM hygiene consistently outperform those who do not because they know their pipeline, they prioritize correctly, and they never lose track of a deal.</p>
  <p>At <a href="/services/fractional-vp-of-sales" class="text-blue-700 font-semibold">GSD Associates</a>, pipeline architecture is one of the first things we build with every client. Book a free strategy call to learn how we would approach yours.</p>`
)))

app.get('/blog/saas-sales-process', (c) => c.html(blogPost(
  'saas-sales-process',
  'The SaaS Sales Process That Closes More Deals (Without Adding Headcount)',
  'SaaS Sales', 'March 2026', '9 min read',
  'Discovery, demo, proposal, negotiation, close — the exact frameworks for each stage that help SaaS companies improve win rates without adding more reps.',
  `<p>Most SaaS companies have a sales process in theory. In practice, every rep does something different, discovery is shallow, demos run long, and proposals sit unanswered for weeks.</p>
  <p>The fix is not hiring more reps. It is building a repeatable process that consistently moves deals forward. Here is the framework stage by stage.</p>
  <h2>Discovery: The Stage That Determines Everything Else</h2>
  <p>Discovery is not about learning about the prospect — it is about helping the prospect articulate their own problem clearly enough that your solution feels like the obvious answer. Most SaaS reps rush through it. The best reps spend 60-70% of their early selling time here.</p>
  <p>The five questions every SaaS discovery call must answer:</p>
  <ul><li>What is the specific problem they are trying to solve? (Not "what are your goals" — what is the actual pain?)</li><li>What does it cost them — in time, money, or missed opportunity?</li><li>What happens if they do not solve it in the next 6 months?</li><li>Who else is affected and who makes the decision?</li><li>What has stopped them from solving it before?</li></ul>
  <div class="stat-callout"><p class="font-bold text-blue-900 mb-1">The discovery multiplier</p><p class="text-gray-700 mb-0">Reps who spend 20+ minutes on discovery before pitching close at 2–3x the rate of reps who rush to demo. Slow down to speed up.</p></div>
  <h2>The SaaS Demo: Show Less, Win More</h2>
  <p>The most common demo mistake: showing everything. A 90-minute feature tour leaves the prospect overwhelmed and unable to connect your product to their specific problem.</p>
  <p>Instead, structure every demo in three parts:</p>
  <ul><li><strong>Setup (5 min):</strong> "Based on our discovery call, here is what I want to show you today and why." Connects the demo to their stated problems.</li><li><strong>The core 20 minutes:</strong> Show only the features that solve the problems they told you about. Nothing else.</li><li><strong>The "what would this change" moment:</strong> "If you could do X in your current workflow, how would that change things for your team?" Get them imagining life with your product.</li></ul>
  <p>After the demo, do not ask "what do you think?" Ask: "Based on what you saw, does this solve the problem we discussed? And what would you need to see to feel confident moving forward?"</p>
  <h2>Proposals: Documents That Close, Not Documents That Report</h2>
  <p>Most SaaS proposals are feature lists with pricing attached. The prospect reads it and has no idea why they should buy. A proposal that closes tells a story: here is the problem you told us you have, here is how we solve it specifically, here is what success looks like, and here is what it costs vs. the cost of not solving it.</p>
  <p>Three rules for winning proposals:</p>
  <ul><li>Open with their problem in their words — not your company overview.</li><li>Quantify the ROI: if fixing this problem is worth $X to them and you cost $Y, the decision becomes math, not judgment.</li><li>Include a mutual action plan: what needs to happen on both sides to get to a signed contract, with dates.</li></ul>
  <h2>Negotiation: Hold Your Price by Building Value Earlier</h2>
  <p>Discounting is a discovery failure, not a closing strategy. If you are getting heavy price pushback, it almost always means you did not establish enough value in earlier stages. The deal size feels disconnected from the outcome.</p>
  <p>Before discounting, try these first:</p>
  <ul><li>"What would need to be true about the ROI for the price to feel right?" — Re-anchor to value.</li><li>"Is it the total price, or the monthly commitment?" — Restructure the deal, not the price.</li><li>"If we could solve [the specific problem they named], does the investment make sense?" — Reconnect to their stated priority.</li></ul>
  <p>If you must discount, trade concessions: a lower price for a longer contract, upfront payment, or a referral. Never give something for nothing.</p>
  <h2>Closing: Ask for the Business</h2>
  <p>The most underused close in SaaS: "Based on everything we have discussed, does it make sense to move forward?" Ask it directly. Most reps dance around it and leave deals open indefinitely because they are afraid of a no.</p>
  <p>A no today is better than a deal that sits in "Negotiation" for three months. Find out what the blocker is and address it or disqualify it. Both outcomes are better than indefinite limbo.</p>
  <p>If you want to build this process into your team — documented, trained, and coached weekly — that is exactly what we do at <a href="/services/sales-consulting" class="text-blue-700 font-semibold">GSD Associates</a>. Book a free strategy call below.</p>`
)))

app.get('/blog/how-to-build-b2b-sales-team', (c) => c.html(blogPost(
  'how-to-build-b2b-sales-team',
  "How to Build a B2B Sales Team from Scratch (The Founder's Playbook)",
  'Team Building', 'March 2026', '11 min read',
  'Hire AE or SDR first? What comp plan? How do you onboard? When do you add a manager? The complete founder guide to building a B2B sales team that actually scales.',
  `<p>Building a B2B sales team is one of the most consequential things a founder does — and one of the most commonly botched. The wrong hire at the wrong time costs you runway, market opportunity, and 6–12 months you will never get back.</p>
  <p>Here is the playbook based on what actually works at the $1M–$10M stage.</p>
  <h2>Who to Hire First: AE or SDR?</h2>
  <p>The most common mistake founders make: hiring SDRs before AEs. The logic seems sound — you need pipeline, SDRs generate pipeline. But SDRs without a great AE to hand off to are expensive lead generators for deals that do not close.</p>
  <p>The right hiring order:</p>
  <ul><li><strong>First hire: AE</strong> who can also prospect (a "full-cycle" rep). This person does everything — outbound, inbound, demos, close. They are expensive and harder to find, but they validate your sales motion before you specialize.</li><li><strong>Second hire: another AE</strong>, once you have proven the first one can hit quota consistently.</li><li><strong>Third hire: SDR</strong>, once you have enough AE capacity to absorb the meetings and a proven talk track to hand to a junior rep.</li></ul>
  <div class="stat-callout"><p class="font-bold text-blue-900 mb-1">The SDR trap</p><p class="text-gray-700 mb-0">Companies that hire SDRs before AEs spend 3–6 months generating meetings that go nowhere because the closing infrastructure is not ready yet. Build the closer before the generator.</p></div>
  <h2>The Comp Plan: Keep It Simple</h2>
  <p>At the early stage, overcomplicating comp plans is one of the fastest ways to lose reps. A clean SaaS AE comp plan:</p>
  <ul><li><strong>OTE:</strong> $80K–$130K depending on market and deal size</li><li><strong>Base/Variable split:</strong> 50/50 for most roles</li><li><strong>Commission rate:</strong> 8–12% of ACV at 100% quota attainment</li><li><strong>Accelerators:</strong> 15–18% for above 100%, 20%+ for above 120%</li><li><strong>Quota:</strong> 4–6x OTE is typical (so a $120K OTE AE carries $480K–$720K ARR quota)</li></ul>
  <p>Avoid: caps on earnings, complex multi-product commission structures, clawbacks that go more than 90 days. These signal distrust and drive good reps away.</p>
  <h2>Onboarding: The 90-Day Ramp Plan</h2>
  <p>Most companies have no onboarding plan. They hand new reps a laptop, a Salesforce login, and wish them luck. Then at day 60 they wonder why performance is not where they expected.</p>
  <p>A proper 90-day ramp:</p>
  <ul><li><strong>Days 1–30:</strong> Product mastery, ICP definition, competitive landscape, value proposition. No calls yet — build the foundation. Quota expectation: 0–25%.</li><li><strong>Days 31–60:</strong> Shadowing senior reps, first solo calls with manager present, pipeline building. Quota expectation: 25–50%.</li><li><strong>Days 61–90:</strong> Full selling, weekly coaching on call recordings, pipeline review participation. Quota expectation: 50–75%.</li><li><strong>Day 91+:</strong> Full quota. Manager coaching transitions from tactical to strategic.</li></ul>
  <h2>Coaching Cadence: What Good Management Looks Like</h2>
  <p>A sales manager who is not coaching is just a glorified admin. Real sales leadership means a consistent coaching structure every week:</p>
  <ul><li><strong>Weekly 1:1 (30 min per rep):</strong> Pipeline review, blockers, one skill to work on this week.</li><li><strong>Weekly team call (30 min):</strong> One deal review as a team — everyone learns from each other.</li><li><strong>Call recording review (1–2 per rep per week):</strong> Listen to real calls, give specific feedback. Not "you did great" — specific moments and specific alternatives.</li><li><strong>Monthly 1:1 (60 min):</strong> Performance review, career development, trajectory conversation.</li></ul>
  <h2>KPIs: What to Measure and When</h2>
  <p>Early stage (pre-$5M ARR), focus on leading indicators:</p>
  <ul><li>Qualified meetings per rep per week (target: 8–12)</li><li>Meeting-to-opportunity conversion rate (target: 40–60%)</li><li>Average deal cycle</li><li>Pipeline coverage vs. quota (target: 3–4x)</li></ul>
  <p>Add lagging indicators once you have enough data:</p>
  <ul><li>Win rate by segment, deal size, rep</li><li>Average ACV</li><li>Time-to-close by stage</li></ul>
  <p>If you want help building this hiring and management infrastructure before your next sales hire, that is exactly what we do at <a href="/services/fractional-vp-of-sales" class="text-blue-700 font-semibold">GSD Associates</a>. Book a free call below.</p>`
)))

app.get('/blog/cold-email-b2b', (c) => c.html(blogPost(
  'cold-email-b2b',
  'B2B Cold Email That Actually Gets Replies: The 5-Step Framework',
  'Sales Outreach', 'March 2026', '9 min read',
  'Most B2B cold emails get ignored. Here is the exact 5-step framework generating 15-20% reply rates for our clients — with real templates you can use today.',
  `<p>Most B2B cold emails are terrible. They are generic, self-centered, too long, and they ask for too much too fast. No wonder average reply rates hover around 1–3%.</p>
  <p>But companies using a disciplined framework consistently see 10–20% reply rates on the same lists. The difference is not the list — it is the approach.</p>
  <h2>Step 1: Subject Line — 3–7 Words, Human Tone</h2>
  <p>Your subject line has one job: get the email opened. Do not try to sell in it. Be specific and human.</p>
  <ul><li>"Quick question for you, [FirstName]" — simple, low threat</li><li>"Saw you're hiring SDRs" — shows you did your homework</li><li>"Is pipeline your #1 problem right now?" — speaks to pain</li></ul>
  <p>Avoid: "Exciting opportunity for [Company]!!!" — desperate energy kills open rates.</p>
  <h2>Step 2: Open With a Specific Observation</h2>
  <p>Your first line should prove you looked at their business specifically — not a generic compliment that applies to anyone.</p>
  <p><strong>Weak:</strong> "I love what you're building at Acme!"</p>
  <p><strong>Strong:</strong> "Saw that Acme just expanded into the Midwest — companies at that stage almost always hit a sales scaling challenge around the same time."</p>
  <p>Sources: LinkedIn activity, recent press releases, job postings, their website.</p>
  <h2>Step 3: Name the Problem They Are Probably Having</h2>
  <p>Instead of pitching your solution, articulate their problem better than they could. If you do this right, they feel like you read their mind.</p>
  <p>Structure: "Companies at [their stage] typically run into [specific problem]. It usually shows up as [specific symptom]."</p>
  <div class="stat-callout"><p class="font-bold text-blue-900 mb-1">Real result</p><p class="text-gray-700 mb-0">One client went from 1.2% to 14% reply rate in 6 weeks by switching from feature-heavy emails to problem-first messaging. Same list. Same reps. Different framework.</p></div>
  <h2>Step 4: One Sentence on What You Do</h2>
  <p>After naming their problem, you get exactly one sentence. Not a paragraph. Not a feature list.</p>
  <p>Formula: "We help [specific company type] [achieve specific outcome] by [key differentiator]."</p>
  <p>Example: "We help B2B companies between $1M–$10M build a repeatable sales system so the founder can get out of every deal — usually within 30 days."</p>
  <h2>Step 5: Ask for Something Small</h2>
  <p>Do not ask for a 45-minute demo from a stranger. Ask a micro-yes.</p>
  <ul><li>"Is this something on your radar right now?" — yes/no, easy to reply</li><li>"Would it be worth a 15-minute call to see if there's a fit?" — lower bar than a demo</li><li>"Does Thursday or Friday work for a quick call?" — personal, specific</li></ul>
  <h2>The 4-Touch Follow-Up Sequence</h2>
  <p>Most replies come from follow-ups, not the first email. Use this sequence:</p>
  <ul><li><strong>Day 0:</strong> Initial email</li><li><strong>Day 3:</strong> Value-add — share a relevant insight or case study. Give something.</li><li><strong>Day 7:</strong> Brief check-in acknowledging they are busy</li><li><strong>Day 14:</strong> The breakup email — "Should I close your file?" This one gets 15–20% reply rates on its own.</li></ul>
  <p>If you want to build a complete outbound system — list building, messaging, sequencing, and coaching — that is exactly what we do at <a href="/services/sales-consulting" class="text-blue-700 font-semibold">GSD Associates</a>.</p>`
)))

app.get('/blog/sales-discovery-call-framework', (c) => c.html(blogPost(
  'sales-discovery-call-framework',
  'The Discovery Call Framework That Doubles Win Rates (Use This Word for Word)',
  'Sales Skills', 'March 2026', '10 min read',
  'Stop winging discovery calls. Here are the 5 must-ask questions and exact scripts that helped clients go from 22% to 39% win rate in a single quarter.',
  `<p>The discovery call is the most important part of your sales process. Not the demo. Not the proposal. The discovery call.</p>
  <p>By the time you finish a well-run discovery call, your prospect should already feel understood — and should already be selling themselves on why they need to act. Most reps wing it. Here is the framework.</p>
  <div class="stat-callout"><p class="font-bold text-blue-900 mb-1">The win rate reality</p><p class="text-gray-700 mb-0">One client improved win rate from 22% to 39% in one quarter — no new reps, no new tools. Just a documented discovery framework applied consistently on every call.</p></div>
  <h2>Before the Call: 10-Minute Prep (Non-Negotiable)</h2>
  <ul><li><strong>LinkedIn:</strong> What is their role? Recent posts? How long have they been there?</li><li><strong>Company website:</strong> New products, new markets, recent news?</li><li><strong>Job postings:</strong> Hiring in sales? Tells you where they are focused.</li><li><strong>Hypothesis:</strong> "Based on what I know, I think their biggest challenge is X." You will test this on the call.</li></ul>
  <h2>Open With a Structured Agenda</h2>
  <p>Use this script: "I'd like to spend the first 20 minutes understanding your current situation, what you're trying to accomplish, and what's getting in the way. Then if what we do seems relevant, I'll share some thoughts on how we might help. Sound good?"</p>
  <p>This tells them what to expect and frames the call as being about them, not your pitch.</p>
  <h2>The 5 Must-Ask Questions</h2>
  <h3>1. "What's your biggest revenue challenge right now?"</h3>
  <p>Open-ended. Let them define the problem. Listen for their language — you will use their exact words later. Dig deeper with: "Can you give me a specific example?"</p>
  <h3>2. "What does that problem cost you — in real dollars or time?"</h3>
  <p>Quantifies the pain. If they cannot answer, help them calculate it. "If your win rate went up 10 points, what would that mean for revenue this year?"</p>
  <h3>3. "What happens if this is not solved in the next 6 months?"</h3>
  <p>Creates urgency without pressure. Makes them confront the cost of inaction in their own words.</p>
  <h3>4. "Who else is involved in a decision like this?"</h3>
  <p>Finds real decision-makers before your proposal goes into a black hole. Follow up with: "If you wanted to move forward, what would that process look like internally?"</p>
  <h3>5. "What's stopped you from solving this before?"</h3>
  <p>Surfaces the real objection early — budget, internal buy-in, past bad experience. Better to know now than at the goal line.</p>
  <h2>The Pivot: Reflect Before You Pitch</h2>
  <p>After your questions, reflect back what you heard: "Let me make sure I have this right. It sounds like [their problem in their words], and the cost is [their number]. And if this is not fixed by [their timeline], you're looking at [their stated consequence]. Is that accurate?"</p>
  <p>When they say yes, they have confirmed their own problem. Your solution no longer feels like a pitch — it feels like an answer.</p>
  <h2>Always Close on a Next Step</h2>
  <p>Never end a discovery call without a specific next step booked. Not "I will follow up" — a date, time, and agenda confirmed before you hang up.</p>
  <p>At <a href="/services/sales-process-development" class="text-blue-700 font-semibold">GSD Associates</a>, we build custom discovery frameworks for each client's product, ICP, and deal cycle — then train and coach to it. Book a free call below to see what that looks like for your team.</p>`
)))

app.get('/blog/fractional-vp-sales-vs-sales-consultant', (c) => c.html(blogPost(
  'fractional-vp-sales-vs-sales-consultant',
  'Fractional VP of Sales vs. Sales Consultant: Which One Does Your Company Actually Need?',
  'Sales Leadership', 'March 2026', '8 min read',
  'Fractional VP of Sales vs. sales consultant — they sound similar but work completely differently. One hands you a map. The other drives the car. Here is the honest breakdown.',
  `<p>I get this question constantly: "What is the difference between a fractional VP of Sales and a sales consultant? Are they not basically the same thing?"</p>
  <p>No. They are not. Hiring the wrong one is an expensive mistake — in money and in time. Here is the honest breakdown.</p>
  <h2>What a Sales Consultant Does</h2>
  <p>A sales consultant is a subject matter expert hired for a specific, defined project. They diagnose your situation, build a deliverable — a playbook, a strategy document, a training curriculum — and then leave. Their job is to give you the thinking. You implement it.</p>
  <p>A good sales consultant will audit your process, benchmark performance, deliver recommendations, train your team on new approaches, and be available for questions during a defined engagement.</p>
  <p>What a sales consultant will not do: manage your reps, attend pipeline reviews, make hiring decisions, own quota, or take accountability for revenue outcomes. They advise. You implement.</p>
  <h2>What a Fractional VP of Sales Does</h2>
  <p>A fractional VP of Sales is an embedded sales leader — part-time but fully committed, operating inside your company, not outside it. They do not just tell you what to do. They do it with you.</p>
  <p>A fractional VP will run your weekly pipeline reviews and hold reps accountable, make or heavily influence hiring and firing decisions, build the playbook and implement it, coach individual reps on live deals, and be accountable to revenue outcomes — not just deliverables.</p>
  <p>The key difference: a consultant hands you a map. A fractional VP drives the car.</p>
  <div class="stat-callout"><p class="font-bold text-blue-900 mb-1">The accountability gap</p><p class="text-gray-700 mb-0">Companies that hire consultants often find the recommendations never get implemented — because nobody owns execution. A fractional VP closes that gap by owning both strategy and implementation.</p></div>
  <h2>When a Sales Consultant Makes More Sense</h2>
  <ul><li>You have a capable VP of Sales but need specific expertise they lack</li><li>You need a one-time project — a comp plan, a market entry strategy, a playbook from scratch</li><li>You are pre-revenue and not yet ready to build a sales team</li><li>You need an outside assessment to diagnose why the team is underperforming</li></ul>
  <h2>When a Fractional VP of Sales Makes More Sense</h2>
  <ul><li>You have a sales team but no dedicated leader managing them</li><li>The founder is still closing most deals and needs to get out</li><li>You have tried consultants before and the recommendations never got implemented</li><li>You need someone to hold reps accountable — not just train them</li><li>You are at $1M–$10M and scaling, but not ready for a full-time VP at $200K+</li></ul>
  <h2>How to Decide</h2>
  <p>Three questions:</p>
  <ol><li>Do I have a sales team that needs to be managed? If yes — fractional VP. If no — consultant.</li><li>Do I need ongoing accountability and execution, or a one-time deliverable? Ongoing — fractional VP. One-time — consultant.</li><li>Have I tried consultants before and not seen results? If yes — the problem was almost certainly implementation, not strategy. Fractional VP.</li></ol>
  <p>At <a href="/services/fractional-vp-of-sales" class="text-blue-700 font-semibold">GSD Associates</a>, we operate as fractional VPs — embedded, accountable, and focused on results. Book a free strategy call and we will tell you honestly which model fits your situation — even if it is not us.</p>`
)))

export default app
