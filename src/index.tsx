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
            background-color: rgba(0, 0, 0, 0.7);
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background-color: white;
            margin: 5% auto;
            padding: 0;
            border-radius: 20px;
            width: 90%;
            max-width: 600px;
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
                    <button onclick="openModal()" class="cta-button text-white px-6 py-2 rounded-full font-semibold">
                        Book Strategy Call
                    </button>
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
                <button onclick="openModal()" class="cta-button text-white px-6 py-3 rounded-full font-semibold w-full">
                    Book Strategy Call
                </button>
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
                        <button onclick="openModal()" class="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-2xl">
                            <i class="fas fa-calendar-check mr-2"></i>
                            Book Free Strategy Call
                        </button>
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
                <button onclick="openModal()" class="cta-button text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl">
                    Schedule Your Free Strategy Call
                    <i class="fas fa-arrow-right ml-2"></i>
                </button>
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
            
            <button onclick="openModal()" class="bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition shadow-2xl mb-4">
                <i class="fas fa-rocket mr-2"></i>
                Book Your Free Strategy Call Now
            </button>
            <p class="text-sm text-gray-200">Available this week • 30-minute commitment • Immediate value</p>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h3 class="text-2xl font-bold gradient-text mb-4">GSD Associates</h3>
                    <p class="text-gray-400">Elite sales leadership for scaling SaaS companies</p>
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
                <h2 class="text-3xl font-bold mb-2">Book Your Free Strategy Call</h2>
                <p class="text-gray-100">30 minutes that could transform your sales org</p>
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
                    alert('Thank you! We\'ll be in touch within 24 hours to schedule your strategy call.');
                    closeModal();
                    e.target.reset();
                } else {
                    alert('Something went wrong. Please email us directly or try again.');
                }
            } catch (error) {
                alert('Something went wrong. Please email us directly or try again.');
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
    
    // Here you would typically send an email notification
    // For now, we'll just log it and return success
    console.log('Contact form submission:', body)
    
    // In production, integrate with your email service here
    // Example: SendGrid, Mailgun, etc.
    
    return c.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    })
  } catch (error) {
    return c.json({ 
      success: false, 
      message: 'Error processing form' 
    }, 500)
  }
})

export default app
