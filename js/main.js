$(document).ready(function() {
	var reviewSwiper = new Swiper(".reviewSwiper", {
		slidesPerView: 6,
		autoplay: false,
		autoplaySpeed: 400,
		arrows: true,
		speed: 1500,
		infinite: true,
		navigation: {
			nextEl: ".swiper-button-next",
		},
		breakpoints: {
			992: {
				slidesPerView: 5,
				spaceBetween: 60,
			}
		},
	});


		$('.kakadu').hover(
			function() {
				$('.brand-wrapper').addClass('hoverkakadu');
			}, function() {
				$('.brand-wrapper').removeClass('hoverkakadu');
			}
		);
	$('.abo').hover(
		function() {
			$('.cards').addClass('hoverabo');
		}, function() {
			$('.cards').removeClass('hoverabo');
		}
	);
	$('.arlekin').hover(
		function() {
			$('.cards').addClass('hoverarlekin');
		}, function() {
			$('.cards').removeClass('hoverarlekin');
		}
	);
	$('.arlekin, .kakadu, .abo').hover(
		function() {
			$('.body_slides').css('display', 'none');
		}, function() {
			$('.body_slides').css('display', '');
		}
	);


	$('.burger').on('click', function(evt){
		$('.mob_menu, .burger').toggleClass('active')
	});

	let scroll_factor = 100;



	function windowSize(){
		if ($(window).width() < '768'){
			scroll_factor = 10;
		}
	}

	$('.click_reg').on('click', function(){
		$('body').addClass('active_popup')
	})

	$('.click_log').on('click', function(){
		$('body').removeClass('active_popup')
	})

	$('.toggle').on('click', function(){
		$('body').toggleClass('active_popup')
	});

	$(function() {

		$.fancyConfirm = function(opts) {
			opts = $.extend(
			true,
			{
				title: "Are you sure?",
				message: "",
				okButton: "OK",
				noButton: "Cancel",
				callback: $.noop
			},
			opts || {}
			);

			$.fancybox.open({
			type: "html",
			src:
				'<div class="fc-content p-5 rounded">' +
				'<h2 class="mb-3">' +
				opts.title +
				"</h2>" +
				"<p>" +
				opts.message +
				"</p>" +
				'<p class="text-right">' +
				'<a data-value="0" data-fancybox-close href="javascript:;" class="mr-2 ">' +
				opts.noButton +
				"</a>" +
				'<button data-value="1" data-fancybox-close class="btn btn-primary">' +
				opts.okButton +
				"</button>" +
				"</p>" +
				"</div>",
			opts: {
				animationDuration: 350,
				animationEffect: "material",
				modal: true,
				baseTpl:
				'<div class="fancybox-container fc-container" role="dialog" tabindex="-1">' +
				'<div class="fancybox-bg"></div>' +
				'<div class="fancybox-inner">' +
				'<div class="fancybox-stage"></div>' +
				"</div>" +
				"</div>",
				afterClose: function(instance, current, e) {
				var button = e ? e.target || e.currentTarget : null;
				var value = button ? $(button).data("value") : 0;

				opts.callback(value);
				}
			}
			});
		};


		$(".test_confirm").click(function() {
			$.fancyConfirm({
				title: "AFFILIATE TERMS & CONDITIONS\n<br>" +
					"VERSION 1.1 IS EFFECTIVE FROM 27.02.2021 AND LAST UPDATED 30.08.2021.\n<br>",
				message:
					"This is an agreement (“The Affiliate Agreement”) between you (“you” or “Affiliate”) and www.enchantaffiliates.com (“Company”, “us”, “we” or \"Affiliate Program\").\n<br>" +
					"By registering for the Affiliate Program, and by accessing and using any of our marketing tools or accepting any reward, bonus or commission, whether contained in the Affiliate Agreement or elsewhere as a part of our Affiliate Program, you will be deemed to have read, understood and agreed to the Affiliate Agreement.\n<br>" +
					"We may periodically make modifications to this Agreement. While we will do our best to notify you of such changes, we recommend that you revisit this page regularly. Your continued use of the Affiliate Program will constitute your consent to the updated Agreement.\n<br>" +
					"<br><b>1.DEFINITIONS</b>\n<br>" +
					"1.1 “Affiliate” means you, the person or entity, who applies to participate in the Affiliate Program.\n<br>" +
					"<br>1.2 “Affiliate Account” means the account of the Affiliate set up after an Affiliate Application is made by the Affiliate to take part in the Affiliate Program and approved by Company.\n<br>" +
					"<br>1.3 “Affiliate Agreement” means (i) all the terms and conditions set out in this document, (ii) the terms and conditions of the Commission Structures applicable to the different products and brands, and (iii) any other rules or guidelines of the Company and/or Websites made known to the Affiliate from time to time.\n<br>" +
					"<br>1.4 “Affiliate Application” means the application made by the Affiliate to participate in the Affiliate Program.\n<br>" +
					"<br>1.5 “Affiliate Links” means internet hyperlinks used by the Affiliate to link from the Affiliate Website(s) or any other any third party website to Company Websites.\n<br>" +
					"<br>1.6 “Affiliate Program” means collaboration between the Company and the Affiliate whereby the Affiliate promotes the Company’s websites and creates Affiliate Links from the Affiliate Website(s) to Company’s websites. For such services the Affiliate is paid a commission depending on the generated traffic to the Company’s websites, subject to terms within this Affiliate Agreement and to the applicable product-specific Commission Structure.\n<br>" +
					"<br>1.7 “Affiliate Wallet” means an online wallet in the name of the Affiliate into which Company pays the commission and any other payments due to the Affiliate, which the Affiliate can withdraw in accordance with the Affiliate Agreement;\n<br>" +
					"<br>1.8 “Affiliate Website” means any website which is maintained, operated or otherwise controlled by the Affiliate.\n<br>" +
					"<br>1.9 “Company” shall mean www.enchantaffiliates.com and any other company within our group of, including our parent companies, their parent companies and all of the subsidiaries of these respective companies.\n<br>" +
					"<br>1.10 “Company Websites” means the websites www.abocasino.com, www.arlekincasino.com, casinokakadu.com or other such websites (including mirror websites) as may be added to this Affiliate Program from time to time, where www.abocasino.com is operated by Hollycorn N.V., www.arlekincasino.com is operated by Dama N.V. and www.casinokakadu.com is operated by N1 Interactive LTD.\n<br>" +
					"<br>1.11 “Commission” means the percentage of the Net Gaming Revenue, or, where applicable, a fixed amount for a New Customer (CPA structure) as set out in the Commission Structures.\n<br>" +
					"<br>1.12 “Commission Structures” means any specific reward structures expressly agreed between Company and the Affiliate.\n<br>" +
					"<br>1.13 “Confidential Information” means any information of commercial or essential value relating to Company such as, but not limited to, financial reports, trade secrets, know-how, prices and custom quotes, business information, products, strategies, databases, technology, information about New Customers, other customers and users of Company Websites, marketing plans and manners of operation.\n<br>" +
					"<br>1.14 “Intellectual Property Rights” means any copyrights, trademarks, service marks, domain names, brands, business names, and registrations of the aforesaid and/or any other similar rights of this nature.\n<br>" +
					"<br>1.15 “Net Gaming Revenue” or “NGR” means all monies received by Company from New Customers as placed bets, less (a) winnings returned to New Customers, (b) issued bonuses, (c) net balance corrections, (d) administration fees, (e) fraud costs and chargebacks. For the avoidance of doubt, all Net Gaming Revenue amounts mentioned above are only related to New Customers referred to Company Websites by the Affiliate Website(s).\n<br>" +
					"<br>1.16 “New Customer” means a new, first-time customer of the Company who made a first deposit amounting to at least the applicable minimum deposit at Company Websites’ player account, in accordance with the applicable terms and conditions of Company Websites’. This excludes the Affiliate, its employees, relatives and friends.\n<br>" +
					"<br>1.17 “Parties” means Company and the Affiliate (each a “Party”).\n<br>" +
					"<br>1.18 “Personal Data” means any information relating to any person, whether individual or legal that is or may be identified, directly or indirectly.\n<br>" +
					"<br><b>2. AFFILIATE OBLIGATIONS</b>\n<br>" +
					"2.1 REGISTERING AS AFFILIATE\n<br>" +
					"To become a member of our Affiliate Program you must accept these terms and conditions by ticking the respective box while submitting the Affiliate Application. The Affiliate Application will form an integral part of the Affiliate Agreement.\n<br>" +
					"We will, at our sole discretion, determine whether or not to accept an Affiliate Application and our decision is final and not subject to any right of appeal. We will notify you by email as to whether or not your Affiliate Application has been successful.\n<br>" +
					"You will provide any documentation required by Company to verify the Affiliate Application and to verify the Affiliate Account information at any time during the term of the Affiliate Agreement. This documentation may include but is not limited to: bank statements, individual or corporate identity papers and proof of address.\n<br>" +
					"It is your sole obligation to ensure that any information you provide us with when registering with the Affiliate Program is correct and that such information is kept up-to-date at all times.\n<br>" +
					"<br>2.2 AFFILIATE LOGIN DETAILS\n<br>" +
					"It is your sole obligation and responsibility to ensure that login details for your Affiliate Account are kept confidential and secure at all times.\n<br>" +
					"Any unauthorised use of your Affiliate Account resulting from your failure to adequately guard your login information shall be your sole responsibility, and you remain solely responsible and liable for all such activity occurring under your Affiliate Account user ID and password (whether such activity was undertaken by you or not). It is your obligation to inform us immediately if you suspect illegal or unauthorised use of your Affiliate Account.\n<br>" +
					"<br>2.3 AFFILIATE PROGRAM PARTICIPATION\n<br>" +
					"The Affiliate Program is intended for your direct participation. Opening an Affiliate Account for a third party, brokering or transfering an Affiliate Account is not accepted. Affiliates wishing to transfer an account to another beneficial owner must contact us and request permission. Besides, you shall not open more than one Affiliate Account without our prior written consent.\n<br>" +
					"By agreeing to participate in the Affiliate Program, you agree to use your best efforts to actively advertise, market and promote the Company Websites in accordance with the Affiliate Agreement and Company’s instructions from time to time. You will ensure that all activities taken by you under the Affiliate Agreement will be in Company’s best interest and will in no way harm the Company’s reputation or goodwill.\n<br>" +
					"You may link to the Company Website’s using the Affiliate Links or other such materials as we may from time to time approve. This is the only method by which you may advertise on our behalf.\n<br>" +
					"<br>2.4 AFFILIATE WEBSITE\n<br>" +
					"You will be solely responsible for the development, operation and maintenance of the Affiliate Website and for all materials that appear on the Affiliate Website. You shall at all times ensure that the Affiliate Website is compliant with all applicable laws, including General Data Protection Regulation (GDPR), and functions as a professional website.\n<br>" +
					"You will not present the Affiliate Website in such a way so that it may cause confusion with the Company Websites, or so that it may give the impression that it is owned or operated by Company.\n<br>" +
					"The Affiliate Website will not contain any defamatory, libellous, discriminatory or otherwise unsuitable content (including, but not limited to, violent, obscene, derogatory or pornographic materials or content which would be unlawful in target country).\n<br>" +
					"<br>2.5 VALID TRAFFIC AND GOOD FAITH\n<br>" +
					"You will not generate traffic by using branded keys for placement of contextual advertising. It's not allowed to send branded traffic to Company Websites. You hereby recognise that any New Customer attrached by using branded keys for placement of contextual advertising does not count as a valid New Customer under the Affiliate Agreement, and thereby any Commission in relation to such New Customers can be freezed or no payable upon Company decision.\n<br>" +
					"You will not generate traffic to Company Websites by registering as a New Customer whether directly or indirectly (for example by using associates, family members or other third parties). Such behaviour shall be deemed as fraud.\n<br>" +
					"You will also not attempt to benefit from traffic not generated in good faith. If you have any reasonable suspicion that any New Customer referred by you is in any way associated to bonus abuse, money laundering, fraud, or other abuse of remote gaming websites, you will immediately notify us of this.\n<br>" +
					"You hereby recognise that any New Customer found to be a bonus abuser, money launderer or fraudster or who assists in any form of affiliate fraud (whether notified by you or later discovered by us) does not count as a valid New Customer under the Affiliate Agreement, and thereby no Commission shall be payable in relation to such New Customers.\n<br>" +
					"You hereby recognise that in case a big winning takes place in the end of the current month (from 20 till 30/ 31) and a balance of a respective player remains unspent or is lost during the next month, such funds will not be included into commission fees of a partner in accordance with the terms of the Revenue Share or Hybrid deals.\n<br>" +
					"You hereby recognize that if 50% of New Customers of your total traffic volume made only a minimum first deposit during the current month, then such traffic shall be considered as motivated under the Affiliate Agreement, and thereby any Commission in relation to such New Customers can be freezed or no payable upon Company decision.\n<br>" +
					"You hereby recognize that if more than 50% of New Customers of your total traffic volume made only a minimum first deposit during the current month, then the whole traffic volume shall be considered as motivated. In this case, the Company has a right not to pay the Commission for such traffic.\n<br>" +
					"You hereby recognize that if 20% of New Customers of your total traffic volume found to be bonus abusers, money launderers or fraudsters or assist in any form in affiliate fraud (whether notified by you or later discovered by us) do not count as a valid New Customers under the Affiliate Agreement, and thereby no Commission shall be payable in relation to whole your traffic.\n<br>" +
					"The Company has a right to ask you by sending the email or notifying via other instant messengers (skype, telegrams, etc.) to suspend your traffic to check the quality of your traffic, as well as to check your traffic for fraud. You hereby recognize that by receiving suspension notification from the Company you will stop the traffic and all New Customers who registered after this notification will not count as a valid New Customer and thereby any Commission in relation to such New Customers can be freezed or no payable upon Company decision.\n<br>" +
					"The Company has a right to cancel partner’s current deal and set a new deal unilaterally notifying the Partner one (1) bank day in advance. Reasons of cancellation may include:\n<br>" +
					"a)low quality traffic;\n<br>" +
					"b)low conversion that may lead to a negative balance.\n<br>" +
					"You hereby recognize that after the cancellation of a current deal and setting of the aone with unilateral notification one (1) bank day beforehand all subsequent traffic that will be brought by the Partner (registrations, first deposits and subsequent deposits) will be paid under conditions of a new deal.\n<br>" +
					"<br>2.6 UNSUITABLE WEBSITES\n<br>" +
					"You will not use any Affiliate Links or otherwise place any digital advertisements whatsoever featuring our Intellectual Property on any unsuitable websites (whether owned by a third party or otherwise).\n<br>" +
					"Unsuitable websites include, but are not limited to, websites that are aimed at children, display illegal pornography or other illegal sexual acts, promote violence, promote discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age, promote illegal activities or in any way violate the intellectual property rights of any third party or of the Company, or breach any relevant advertising regulations or codes of practice in any territory where such Affiliate Links or digital advertisements may be featured.\n<br>" +
					"<br>2.7 AFFILIATE LINKS\n<br>" +
					"The Affiliate Links shall be displayed at least as prominently as any other sales link on the Affiliate Website.\n<br>" +
					"You will only use Affiliate Links provided by Company within the scope of the Affiliate Program. Masking your Affiliate Links (for example hiding the source of the traffic sent to Company’s Websites) is also prohibited.\n<br>" +
					"<br>2.8 EMAIL AND SMS MARKETING\n<br>" +
					"If sending any emails or SMS communications to individuals which (i) include any of Company’s Intellectual Property Rights; or (ii) otherwise intend to promote Company Websites, you must first obtain our permission to send such emails.\n<br>" +
					"If such permission is granted by the Company, you must then ensure you have each and every recipient’s explicit consent to receive marketing communications in the form of communication to be sent (i.e. by SMS or email) and that such individuals have not opted out of receiving such communication. You must also make it clear to the recipient that all marketing communications are sent from you and are not from our Company.\n<br>" +
					"<br>2.9 USE OF COMPANY INTELLECTUAL PROPERTY RIGHTS\n<br>" +
					"Any use of Company’s Intellectual Property Rights must be in accordance with any brand guidelines issued to you from time to time and are always subject to the approval required in clause below.\n<br>" +
					"You will not register domain names, as well as search terms or other identifiers for use in any search engine, portal, app store, sponsored advertising service or other referral service which are identical to any of the Company’s trademarks or otherwise include the Company trademarks.\n<br>" +
					"<br>2.10 APPROVED CREATIVE\n<br>" +
					"You will not use any advertising layout or creative (including banners, images, logos) incorporating our Intellectual Property Rights unless the advertising layout or creative was provided to you by the Company or (if advertising layouts are created by you) without the advance written approval of Company. You will not modify the appearance of any advertising that has been provided to you or for which approval was granted.\n<br>" +
					"It is your responsibility to seek approval from Company in time for launch of any advertising campaign or creative, to ensure you have written approval from the Company in relation to advertising, and to be able to evidence such approval upon request.\n<br>" +
					"<br>2.11 LOYALTY PROGRAMS\n<br>" +
					"You will not offer any cash-back / value-back or similar programs, other than such programs as are offered on the Company Websites.\n<br>" +
					"<br>2.12 RESPONSIBLE GAMING\n<br>" +
					"The Company has ongoing commitment to responsible gaming and prevention of gambling addiction. You agree to actively cooperate with the Company to convey a responsible gaming message. Specifically, you will not use any material or in any way target persons who are under 18 or the legal gambling age in their jurisdiction.\n<br>" +
					"<br>2.13 ILLEGAL ACTIVITY\n<br>" +
					"You will not target any territory or jurisdictions where gambling is illegal. You will act within the relevant and / or applicable law at all times and you will not perform any act which is illegal in relation to the Affiliate Program or otherwise.\n<br>" +
					"The Affiliate acknowledges that promoting on Swedish market resources and using Swedish language is subject to legal restrictions in Sweden. Such actions will be considered as a breach of general terms & conditions and will lead to the immediate account closure if disclosed. \n<br>" +
					"You should also indicate in Affiliate T&C the following closure:\n<br>" +
					"The Affiliate acknowledges that promoting on Netherlands market resources and using Dutch language is subject to legal restrictions in Netherlands. Such actions will be considered as a breach of general T&C and will lead to the immediate account closure if disclosed.\n<br>" +
					"<br>2.14 DATA PROTECTION AND COOKIES\n<br>" +
					"You shall at all times comply with the General Data Protection Regulation (GDPR) and any existing or new data protection acts, regulations or law applicable to your territory. This includes all applicable legislation and/or regulations relating to the use of ‘cookies’.\n<br>" +
					"<br>2.15 COST AND EXPENSE\n<br>" +
					"You shall be solely responsible for all risk, costs and expenses incurred by you in meeting your obligations under the Affiliate Agreement.\n<br>" +
					"<br>2.16 COMPANY MONITORING OF AFFILIATE ACTIVITY\n<br>" +
					"You will immediately give Company all such assistance as is required and provide us with all such information as is requested by Company to monitor your activity under the Affiliate Program.\n<br>" +
					"<br>2.17 COMMISSIONS PAID INCORRECTLY\n<br>" +
					"The Affiliate agrees to immediately upon request by Company, return all Commissions received based on New Customers referred to Company in breach of the Affiliate Agreement or relating to fraudulent or falsified transactions.\n<br>" +
					"<br><b>3. AFFILIATE RIGHTS</b>\n<br>" +
					"3.1. RIGHT TO DIRECT NEW CUSTOMERS\n<br>" +
					"We grant you the non-exclusive, non-assignable, right, during the term of this Affiliate Agreement, to direct New Customers to such Company Websites as we have agreed with you in strict accordance with the terms of the Affiliate Agreement. You shall have no claim to Commission or other compensation on business secured by persons or entities other than you.\n<br>" +
					"<br>3.2. LICENCE TO USE COMPANY INTELLECTUAL PROPERTY RIGHTS\n<br>" +
					"We grant to you a non-exclusive, non-transferable licence, during the term of this Affiliate Agreement, to use the Company Intellectual Property Rights, which we may from time to time approve solely in connection with the display of the promotional materials on the Affiliate Website or in other such locations as may have been expressly approved (in writing) by Company. This licence cannot be sub-licensed, assigned or otherwise transferred by you.\n<br>" +
					"<br>3.3. PLAYERS’ PERSONAL DATA\n<br>" +
					"For the purpose of the services delivered under this Agreement, it is understood that the Affiliate shall not have access to any Personal Data of Company’s customers.\n<br>" +
					"<br><b>4. COMPANY OBLIGATIONS</b>\n<br>" +
					"4.1. We shall use our best efforts to provide you with all materials and information required for necessary implementation of the Affiliate Links.\n<br>" +
					"<br>4.2. At our sole discretion, we will register any New Customers directed to the Company Websites by you and we will track their transactions. We reserve the right to refuse New Customers (or to close their accounts) if necessary to comply with any requirements we may periodically establish.\n<br>" +
					"<br>4.3. We shall make available monitoring tools which enable you to monitor your Affiliate Account and the level of your Commission and the payment thereof.\n<br>" +
					"<br>4.4. We shall use and process the following personal data of an Affiliate or any Affiliate employee, as follows: your username for logging in, your email address, name, date of birth, your country and address, telephone number and financial data for the purposes of ensuring a high level of security, fulfilling the AML legal requirements and for managing our business relationship.\n<br>" +
					"<br>4.5. Subject to your strict adherence to the Affiliate Agreement, we shall pay you the Commission in accordance with Clause 6.\n<br>" +
					"<br><b>5. COMPANY RIGHTS AND REMEDIES</b>\n<br>" +
					"In the case of your breach (or, where relevant, suspected breach) of this Agreement or your negligence in performance under the Affiliate Program, or failure to meet your obligations hereunder, the Company shall have the following remedies available:\n<br>" +
					"a) the right to suspend your participation in the Affiliate Program for the period required to investigate any activities that may be in breach of the Affiliate Agreement. During such period of suspension payment of Commissions will also be suspended;\n<br>" +
					"b) the right to withhold any Commission or any other payment to the Affiliate arising from or relating to any specific campaign, traffic, content or activity conducted or created by the Affiliate which is in breach of the Affiliate’s obligations under the Affiliate Agreement;\n<br>" +
					"c) the right to withhold from the Commission monies which Company deems reasonable to cover any indemnity given by the Affiliate hereunder or to cover any liability of Company which arises as a result of the Affiliate’s breach of the Affiliate Agreement;\n<br>" +
					"d) immediately terminate the Affiliate Agreement;\n<br>" +
					"e) the right to withhold monies held in the Affiliate Wallet if they are not withdrawn within a period of 3 (three) months from the date of the termination of the Affiliate Agreement in accordance with clause 9.1.\n<br>" +
					"Our rights and remedies detailed above shall not be mutually exclusive.\n<br>" +
					"<br><b>6. COMMISSION AND PAYMENT</b>\n<br>" +
					"6.1. Subject to your adherence to the provisions of the Affiliate Agreement, you will earn Commission in accordance with the Commission Structure. We retain the right to change the Commission percentage and method of calculation of Commission in accordance with this clause.\n<br>" +
					"<br>6.2 The Commission is calculated at the end of each month and payments shall be made on a monthly basis in arrears, not later than the 10th of the following calendar month.\n<br>" +
					"<br>6.3. Payment of Commission will be made through our Affiliate Wallet. Due to existing regulations, Affiliates may be required for verification and “know your customer” documentation before a withdrawal can be accessed.\n<br>" +
					"<br>6.4. A minimum amount of €20 (twenty euro) may be withdrawn from the Affiliate Wallet at one time.\n<br>" +
					"<br>6.5. If an error is made in the calculation of the Commission, the Company has the right to correct such calculation at any time and will immediately pay out underpayment or reclaim overpayment made to the Affiliate.\n<br>" +
					"<br>6.6. The Affiliate may, at the Company’s sole discretion, be provided with the opportunity to restructure its commission structure.\n<br>" +
					"<br>6.7. The Affiliate’s acceptance of a Commission payment shall constitute the full and final settlement of the balance due for the relevant period. In case the Affiliate disagrees with the balance due as reported, he or she shall notify the Company within fourteen (14) calendar days and clearly state reasons of the disagreement. Failure to notify the Company within this time limit shall be considered as an irrevocable acknowledgment of the balance due for the relevant period.\n<br>" +
					"<br>6.8. The Commission shall be deemed to be exclusive of value added tax or any other applicable tax. The Affiliate shall have the sole responsibility to pay any and all taxes, levies, charges and any other money payable or due to any tax authority, department or other competent entity as a result of the compensation generated under the Affiliate Agreement.\n<br>" +
					"<br>6.9. Please note that under the Malta License for German traffic and Irish traffic, VAT is deducted at 19% and 23% respectively. This VAT will be included in the deal.\n<br>" +
					"<br>6.10 In case of partnership on Hybrid and CPA basis there are several stipulations that should be taken into account:\n<br>" +
					"Negative Revenue Share will be deducted from CPA part of the commission. This stipulation takes effect unless otherwise agreed with the affiliate manager beforehand.\n<br>" +
					"Duplicate accounts and self-excluded players will be deducted from CPA part of the Commission. This stipulation takes effect unless alternative was discussed with affiliate manager beforehand.\n<br>" +
					"In cases certain CAP was negotiated with a partner commission will be paid only for the negotiated number of FTDs.\n<br>" +
					"<br>6.11 Available payment methods.\n<br>" +
					"Within affiliate program of Enchant Affiliates affiliates can withdraw their commission funds using the following payment methods:\n<br>" +
					"Skrill\n<br>" +
					"Neteller\n<br>" +
					"Bank Transfer\n<br>" +
					"Coinspaid\n<br>" +
					"<br><b>7. STANDARD COMMISSION STRUCTURES</b>\n<br>" +
					"30% if monthly NGR is equal or below 5,000 EUR;\n<br>" +
					"35% if monthly NGR is between 5,000 EUR and 10,000 EUR;\n<br>" +
					"45% if monthly NGR is between 10,000 EUR and 20,000 EUR;\n<br>" +
					"50% if monthly NGR is more than 20,000 EUR\n<br>" +
					"<br><b>8. CONFIDENTIAL INFORMATION</b>\n<br>" +
					"During the term of the Affiliate Agreement, you may from time to time be entrusted with confidential information relating to our business, operations, or underlying technology and/or the Affiliate Program (including, for example, the Commissions earned by you under the Affiliate Program).\n<br>" +
					"You agree to avoid disclosure or unauthorised use of any such confidential information to third persons or outside parties unless you have our prior written consent. You also agree that you will use the confidential information only for the purposes of the Affiliate Agreement. Your obligations in regards to this clause survive the termination of this Agreement.\n<br>" +
					"In addition, you must not issue any press release or similar communication to the public with respect to your participation in the Affiliate Program without the prior written consent of the Company (with approval of the exact content to also be approved by Company).\n<br>" +
					"<br><b>9. TERM AND TERMINATION</b>\n<br>" +
					"9.1. REASON FOR TERMINATION \n<br>" +
					"The term of the Affiliate Agreement will begin when you are approved as an Affiliate and will be continuous unless and until either Party notifies the other in writing that it wishes to terminate the Agreement. In this case the Agreement will be terminated 30 days after such notice is given. For purposes of notification of termination, delivery via e-mail is considered a written and immediate form of notification.\n<br>" +
					"For the avoidance of doubt, Company may also terminate (in accordance with Clause 5 above) upon immediate notice at any time for the Affiliates failure to meet their obligations under the Agreement or otherwise for the Affiliate’s negligence.\n<br>" +
					"Spamming, violation of advertising rules, fraud, attracting poor-quality traffic that does not meet the requirements of the casino, the systematic involvement of players from banned countries.\n<br>" +
					"<br>9.2. AFFILIATE ACTIONS UPON TERMINATION\n<br>" +
					"Upon termination you must immediately remove all of Company banners or creatives from the Affiliate Website and disable all Affiliate Links from the Affiliate Website to all Company Websites.\n<br>" +
					"All rights and licenses given to you in the Affiliate Agreement shall immediately terminate.\n<br>" +
					"You will return to Company any confidential information and all copies of it in your possession and control, and will cease all uses of all Company Intellectual Property Rights.\n<br>" +
					"<br>9.3. COMMISSION\n<br>" +
					"Upon termination of the Affiliate Agreement for any reason, all Commission relating to any New Customers directed to Company during the term shall not be payable to the Affiliate as from the date of termination.\n<br>" +
					"<br><b>10. MISCELLANEOUS</b>\n<br>" +
					"10.1. DISCLAIMER\n<br>" +
					"We make no express or implied warranties or representations with respect to the Affiliate Program, about Company or the Commission payment arrangements (including, without limitation, functionality, warranties of fitness, merchantability, legality or non-infringement). In addition, we make no representation that the operation of our sites will be uninterrupted or error-free and will not be liable for the consequences if there are any. In the event of a discrepancy between the reports offered in the Affiliate Account system and the Company database, the database shall be deemed accurate.\n<br>" +
					"<br>10.2. INDEMNITY AND LIMITATION OF LIABILITY\n<br>" +
					"You shall indemnify and hold Company, our directors, employees and representatives harmless from and against any and all liabilities, losses, damages and costs, including legal fees, resulting from or in any way connected with (a) any breach by you of any provision of the Affiliate Agreement, (b) the performance of your duties and obligations under the Affiliate Agreement, (c) your negligence or (d) any injury caused directly or indirectly by your negligent or intentional acts or omissions, or the unauthorised use of our creatives and links or this Affiliate Program.\n<br>" +
					"The Company shall not be held liable for any direct or indirect, special, or consequential damages (or any loss of revenue, profits, or data), any loss of goodwill or reputation arising in connection with the Affiliate Agreement or the Affiliate Program, even if we have been advised of the possibility of such damages.\n<br>" +
					"<br>10.3. NON-WAIVER\n<br>" +
					"Our failure to enforce your strict performance of any provision of the Affiliate Agreement will not constitute a waiver of our right to subsequently enforce such provision or any other provision of the Affiliate Agreement.\n<br>" +
					"<br>10.4. RELATIONSHIP OF PARTIES\n<br>" +
					"The Company and the Affiliate are independent contractors and nothing in the Affiliate Agreement will create any partnership, joint venture, agency, franchise, sales representative, or employment relationship between us. You will have no authority to make or accept any offers or representations on our behalf. You will not make any statement, whether on your site or otherwise, that would contradict anything in this Affiliate Agreement.\n<br>" +
					"<br>10.5. FORCE MAJEURE\n<br>" +
					"Neither party shall be liable to the other for any delay or failure to perform its obligations under the Affiliate Agreement if such delay or failure arises from a cause beyond its reasonable control, including but not limited to labour disputes, strikes, industrial disturbances, acts of God, acts of terrorism, floods, lightning, utility or communications failures, earthquakes or other casualty. If such event occurs, the non-performing Party is excused from whatever performance is prevented by the event to the extent prevented provided that if the force majeure event subsists for a period exceeding thirty (30) calendar days then either Party may terminate the Affiliate Agreement with immediate effect by providing a written notice.\n<br>" +
					"<br>10.6. ASSIGNABILITY\n<br>" +
					"You may not assign the Affiliate Agreement, by operation of law or otherwise, without our prior written consent.\n<br>" +
					"<br>10.7. SEVERABILITY\n<br>" +
					"If any provision of the Affiliate Agreement is held to be invalid, illegal or unenforceable in any respect, such provision will be ineffective only to the extent of such invalidity, or unenforceability, without invalidating the remainder of the Affiliate Agreement or any provision hereof.\n<br>" +
					"<br>10.8. ENGLISH LANGUAGE\n<br>" +
					"The Affiliate Agreement was first drafted in English. Should there be any conflict or discrepancy between the English language version and any other language, the English version shall prevail.\n<br>" +
					"<br>10.9. MODIFICATION OF TERMS & CONDITIONS\n<br>" +
					"We may modify any of the terms and conditions contained in the Affiliate Agreement or replace it at any time and in our sole discretion by posting a change notice or a new agreement on our site. Modifications may include, for example, changes in the scope of available Commissions and Affiliate Program rules. Affiliates will be e-mailed with any term modifications.\n<br>" +
					"If any modification is unacceptable to you, your need to terminate the Affiliate Agreement. Your continued participation in our Affiliate Program following our posting of a change notice or new agreement will constitute binding acceptance of the modification or of the new agreement. Affiliates will be e-mailed with any term modifications.\n<br>" +
					"\n<br>",

				okButton: "Agree",
				noButton: "Disagree",
				callback: function(value) {
					if (value) {
						if ($('.terms').prop('checked')) {
						} else {
							$('.terms').trigger('click')
						}
					} else {

					}
				}
			});
		});

	});

	$(".test_confirm1").click(function() {
		$.fancyConfirm({
			title: "AFFILIATE TERMS & CONDITIONS\n<br>" +
					"VERSION 1.1 IS EFFECTIVE FROM 27.02.2021 AND LAST UPDATED 30.08.2021.\n<br>",
			message:
				"This is an agreement (“The Affiliate Agreement”) between you (“you” or “Affiliate”) and www.enchantaffiliates.com (“Company”, “us”, “we” or \"Affiliate Program\").\n<br>" +
				"By registering for the Affiliate Program, and by accessing and using any of our marketing tools or accepting any reward, bonus or commission, whether contained in the Affiliate Agreement or elsewhere as a part of our Affiliate Program, you will be deemed to have read, understood and agreed to the Affiliate Agreement.\n<br>" +
				"We may periodically make modifications to this Agreement. While we will do our best to notify you of such changes, we recommend that you revisit this page regularly. Your continued use of the Affiliate Program will constitute your consent to the updated Agreement.\n<br>" +
				"<br><b>1.DEFINITIONS</b>\n<br>" +
				"1.1 “Affiliate” means you, the person or entity, who applies to participate in the Affiliate Program.\n<br>" +
				"<br>1.2 “Affiliate Account” means the account of the Affiliate set up after an Affiliate Application is made by the Affiliate to take part in the Affiliate Program and approved by Company.\n<br>" +
				"<br>1.3 “Affiliate Agreement” means (i) all the terms and conditions set out in this document, (ii) the terms and conditions of the Commission Structures applicable to the different products and brands, and (iii) any other rules or guidelines of the Company and/or Websites made known to the Affiliate from time to time.\n<br>" +
				"<br>1.4 “Affiliate Application” means the application made by the Affiliate to participate in the Affiliate Program.\n<br>" +
				"<br>1.5 “Affiliate Links” means internet hyperlinks used by the Affiliate to link from the Affiliate Website(s) or any other any third party website to Company Websites.\n<br>" +
				"<br>1.6 “Affiliate Program” means collaboration between the Company and the Affiliate whereby the Affiliate promotes the Company’s websites and creates Affiliate Links from the Affiliate Website(s) to Company’s websites. For such services the Affiliate is paid a commission depending on the generated traffic to the Company’s websites, subject to terms within this Affiliate Agreement and to the applicable product-specific Commission Structure.\n<br>" +
				"<br>1.7 “Affiliate Wallet” means an online wallet in the name of the Affiliate into which Company pays the commission and any other payments due to the Affiliate, which the Affiliate can withdraw in accordance with the Affiliate Agreement;\n<br>" +
				"<br>1.8 “Affiliate Website” means any website which is maintained, operated or otherwise controlled by the Affiliate.\n<br>" +
				"<br>1.9 “Company” shall mean www.enchantaffiliates.com and any other company within our group of, including our parent companies, their parent companies and all of the subsidiaries of these respective companies.\n<br>" +
				"<br>1.10 “Company Websites” means the websites www.abocasino.com, www.arlekincasino.com, casinokakadu.com or other such websites (including mirror websites) as may be added to this Affiliate Program from time to time, where www.abocasino.com is operated by Hollycorn N.V., www.arlekincasino.com is operated by Dama N.V. and www.casinokakadu.com is operated by N1 Interactive LTD.\n<br>" +
				"<br>1.11 “Commission” means the percentage of the Net Gaming Revenue, or, where applicable, a fixed amount for a New Customer (CPA structure) as set out in the Commission Structures.\n<br>" +
				"<br>1.12 “Commission Structures” means any specific reward structures expressly agreed between Company and the Affiliate.\n<br>" +
				"<br>1.13 “Confidential Information” means any information of commercial or essential value relating to Company such as, but not limited to, financial reports, trade secrets, know-how, prices and custom quotes, business information, products, strategies, databases, technology, information about New Customers, other customers and users of Company Websites, marketing plans and manners of operation.\n<br>" +
				"<br>1.14 “Intellectual Property Rights” means any copyrights, trademarks, service marks, domain names, brands, business names, and registrations of the aforesaid and/or any other similar rights of this nature.\n<br>" +
				"<br>1.15 “Net Gaming Revenue” or “NGR” means all monies received by Company from New Customers as placed bets, less (a) winnings returned to New Customers, (b) issued bonuses, (c) net balance corrections, (d) administration fees, (e) fraud costs and chargebacks. For the avoidance of doubt, all Net Gaming Revenue amounts mentioned above are only related to New Customers referred to Company Websites by the Affiliate Website(s).\n<br>" +
				"<br>1.16 “New Customer” means a new, first-time customer of the Company who made a first deposit amounting to at least the applicable minimum deposit at Company Websites’ player account, in accordance with the applicable terms and conditions of Company Websites’. This excludes the Affiliate, its employees, relatives and friends.\n<br>" +
				"<br>1.17 “Parties” means Company and the Affiliate (each a “Party”).\n<br>" +
				"<br>1.18 “Personal Data” means any information relating to any person, whether individual or legal that is or may be identified, directly or indirectly.\n<br>" +
				"<br><b>2. AFFILIATE OBLIGATIONS</b>\n<br>" +
				"2.1 REGISTERING AS AFFILIATE\n<br>" +
				"To become a member of our Affiliate Program you must accept these terms and conditions by ticking the respective box while submitting the Affiliate Application. The Affiliate Application will form an integral part of the Affiliate Agreement.\n<br>" +
				"We will, at our sole discretion, determine whether or not to accept an Affiliate Application and our decision is final and not subject to any right of appeal. We will notify you by email as to whether or not your Affiliate Application has been successful.\n<br>" +
				"You will provide any documentation required by Company to verify the Affiliate Application and to verify the Affiliate Account information at any time during the term of the Affiliate Agreement. This documentation may include but is not limited to: bank statements, individual or corporate identity papers and proof of address.\n<br>" +
				"It is your sole obligation to ensure that any information you provide us with when registering with the Affiliate Program is correct and that such information is kept up-to-date at all times.\n<br>" +
				"<br>2.2 AFFILIATE LOGIN DETAILS\n<br>" +
				"It is your sole obligation and responsibility to ensure that login details for your Affiliate Account are kept confidential and secure at all times.\n<br>" +
				"Any unauthorised use of your Affiliate Account resulting from your failure to adequately guard your login information shall be your sole responsibility, and you remain solely responsible and liable for all such activity occurring under your Affiliate Account user ID and password (whether such activity was undertaken by you or not). It is your obligation to inform us immediately if you suspect illegal or unauthorised use of your Affiliate Account.\n<br>" +
				"<br>2.3 AFFILIATE PROGRAM PARTICIPATION\n<br>" +
				"The Affiliate Program is intended for your direct participation. Opening an Affiliate Account for a third party, brokering or transfering an Affiliate Account is not accepted. Affiliates wishing to transfer an account to another beneficial owner must contact us and request permission. Besides, you shall not open more than one Affiliate Account without our prior written consent.\n<br>" +
				"By agreeing to participate in the Affiliate Program, you agree to use your best efforts to actively advertise, market and promote the Company Websites in accordance with the Affiliate Agreement and Company’s instructions from time to time. You will ensure that all activities taken by you under the Affiliate Agreement will be in Company’s best interest and will in no way harm the Company’s reputation or goodwill.\n<br>" +
				"You may link to the Company Website’s using the Affiliate Links or other such materials as we may from time to time approve. This is the only method by which you may advertise on our behalf.\n<br>" +
				"<br>2.4 AFFILIATE WEBSITE\n<br>" +
				"You will be solely responsible for the development, operation and maintenance of the Affiliate Website and for all materials that appear on the Affiliate Website. You shall at all times ensure that the Affiliate Website is compliant with all applicable laws, including General Data Protection Regulation (GDPR), and functions as a professional website.\n<br>" +
				"You will not present the Affiliate Website in such a way so that it may cause confusion with the Company Websites, or so that it may give the impression that it is owned or operated by Company.\n<br>" +
				"The Affiliate Website will not contain any defamatory, libellous, discriminatory or otherwise unsuitable content (including, but not limited to, violent, obscene, derogatory or pornographic materials or content which would be unlawful in target country).\n<br>" +
				"<br>2.5 VALID TRAFFIC AND GOOD FAITH\n<br>" +
				"You will not generate traffic by using branded keys for placement of contextual advertising. It's not allowed to send branded traffic to Company Websites. You hereby recognise that any New Customer attrached by using branded keys for placement of contextual advertising does not count as a valid New Customer under the Affiliate Agreement, and thereby any Commission in relation to such New Customers can be freezed or no payable upon Company decision.\n<br>" +
				"You will not generate traffic to Company Websites by registering as a New Customer whether directly or indirectly (for example by using associates, family members or other third parties). Such behaviour shall be deemed as fraud.\n<br>" +
				"You will also not attempt to benefit from traffic not generated in good faith. If you have any reasonable suspicion that any New Customer referred by you is in any way associated to bonus abuse, money laundering, fraud, or other abuse of remote gaming websites, you will immediately notify us of this.\n<br>" +
				"You hereby recognise that any New Customer found to be a bonus abuser, money launderer or fraudster or who assists in any form of affiliate fraud (whether notified by you or later discovered by us) does not count as a valid New Customer under the Affiliate Agreement, and thereby no Commission shall be payable in relation to such New Customers.\n<br>" +
				"You hereby recognise that in case a big winning takes place in the end of the current month (from 20 till 30/ 31) and a balance of a respective player remains unspent or is lost during the next month, such funds will not be included into commission fees of a partner in accordance with the terms of the Revenue Share or Hybrid deals.\n<br>" +
				"You hereby recognize that if 50% of New Customers of your total traffic volume made only a minimum first deposit during the current month, then such traffic shall be considered as motivated under the Affiliate Agreement, and thereby any Commission in relation to such New Customers can be freezed or no payable upon Company decision.\n<br>" +
				"You hereby recognize that if more than 50% of New Customers of your total traffic volume made only a minimum first deposit during the current month, then the whole traffic volume shall be considered as motivated. In this case, the Company has a right not to pay the Commission for such traffic.\n<br>" +
				"You hereby recognize that if 20% of New Customers of your total traffic volume found to be bonus abusers, money launderers or fraudsters or assist in any form in affiliate fraud (whether notified by you or later discovered by us) do not count as a valid New Customers under the Affiliate Agreement, and thereby no Commission shall be payable in relation to whole your traffic.\n<br>" +
				"The Company has a right to ask you by sending the email or notifying via other instant messengers (skype, telegrams, etc.) to suspend your traffic to check the quality of your traffic, as well as to check your traffic for fraud. You hereby recognize that by receiving suspension notification from the Company you will stop the traffic and all New Customers who registered after this notification will not count as a valid New Customer and thereby any Commission in relation to such New Customers can be freezed or no payable upon Company decision.\n<br>" +
				"The Company has a right to cancel partner’s current deal and set a new deal unilaterally notifying the Partner one (1) bank day in advance. Reasons of cancellation may include:\n<br>" +
				"a)low quality traffic;\n<br>" +
				"b)low conversion that may lead to a negative balance.\n<br>" +
				"You hereby recognize that after the cancellation of a current deal and setting of the aone with unilateral notification one (1) bank day beforehand all subsequent traffic that will be brought by the Partner (registrations, first deposits and subsequent deposits) will be paid under conditions of a new deal.\n<br>" +
				"<br>2.6 UNSUITABLE WEBSITES\n<br>" +
				"You will not use any Affiliate Links or otherwise place any digital advertisements whatsoever featuring our Intellectual Property on any unsuitable websites (whether owned by a third party or otherwise).\n<br>" +
				"Unsuitable websites include, but are not limited to, websites that are aimed at children, display illegal pornography or other illegal sexual acts, promote violence, promote discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age, promote illegal activities or in any way violate the intellectual property rights of any third party or of the Company, or breach any relevant advertising regulations or codes of practice in any territory where such Affiliate Links or digital advertisements may be featured.\n<br>" +
				"<br>2.7 AFFILIATE LINKS\n<br>" +
				"The Affiliate Links shall be displayed at least as prominently as any other sales link on the Affiliate Website.\n<br>" +
				"You will only use Affiliate Links provided by Company within the scope of the Affiliate Program. Masking your Affiliate Links (for example hiding the source of the traffic sent to Company’s Websites) is also prohibited.\n<br>" +
				"<br>2.8 EMAIL AND SMS MARKETING\n<br>" +
				"If sending any emails or SMS communications to individuals which (i) include any of Company’s Intellectual Property Rights; or (ii) otherwise intend to promote Company Websites, you must first obtain our permission to send such emails.\n<br>" +
				"If such permission is granted by the Company, you must then ensure you have each and every recipient’s explicit consent to receive marketing communications in the form of communication to be sent (i.e. by SMS or email) and that such individuals have not opted out of receiving such communication. You must also make it clear to the recipient that all marketing communications are sent from you and are not from our Company.\n<br>" +
				"<br>2.9 USE OF COMPANY INTELLECTUAL PROPERTY RIGHTS\n<br>" +
				"Any use of Company’s Intellectual Property Rights must be in accordance with any brand guidelines issued to you from time to time and are always subject to the approval required in clause below.\n<br>" +
				"You will not register domain names, as well as search terms or other identifiers for use in any search engine, portal, app store, sponsored advertising service or other referral service which are identical to any of the Company’s trademarks or otherwise include the Company trademarks.\n<br>" +
				"<br>2.10 APPROVED CREATIVE\n<br>" +
				"You will not use any advertising layout or creative (including banners, images, logos) incorporating our Intellectual Property Rights unless the advertising layout or creative was provided to you by the Company or (if advertising layouts are created by you) without the advance written approval of Company. You will not modify the appearance of any advertising that has been provided to you or for which approval was granted.\n<br>" +
				"It is your responsibility to seek approval from Company in time for launch of any advertising campaign or creative, to ensure you have written approval from the Company in relation to advertising, and to be able to evidence such approval upon request.\n<br>" +
				"<br>2.11 LOYALTY PROGRAMS\n<br>" +
				"You will not offer any cash-back / value-back or similar programs, other than such programs as are offered on the Company Websites.\n<br>" +
				"<br>2.12 RESPONSIBLE GAMING\n<br>" +
				"The Company has ongoing commitment to responsible gaming and prevention of gambling addiction. You agree to actively cooperate with the Company to convey a responsible gaming message. Specifically, you will not use any material or in any way target persons who are under 18 or the legal gambling age in their jurisdiction.\n<br>" +
				"<br>2.13 ILLEGAL ACTIVITY\n<br>" +
				"You will not target any territory or jurisdictions where gambling is illegal. You will act within the relevant and / or applicable law at all times and you will not perform any act which is illegal in relation to the Affiliate Program or otherwise.\n<br>" +
				"The Affiliate acknowledges that promoting on Swedish market resources and using Swedish language is subject to legal restrictions in Sweden. Such actions will be considered as a breach of general terms & conditions and will lead to the immediate account closure if disclosed. \n<br>" +
				"You should also indicate in Affiliate T&C the following closure:\n<br>" +
				"The Affiliate acknowledges that promoting on Netherlands market resources and using Dutch language is subject to legal restrictions in Netherlands. Such actions will be considered as a breach of general T&C and will lead to the immediate account closure if disclosed.\n<br>" +
				"<br>2.14 DATA PROTECTION AND COOKIES\n<br>" +
				"You shall at all times comply with the General Data Protection Regulation (GDPR) and any existing or new data protection acts, regulations or law applicable to your territory. This includes all applicable legislation and/or regulations relating to the use of ‘cookies’.\n<br>" +
				"<br>2.15 COST AND EXPENSE\n<br>" +
				"You shall be solely responsible for all risk, costs and expenses incurred by you in meeting your obligations under the Affiliate Agreement.\n<br>" +
				"<br>2.16 COMPANY MONITORING OF AFFILIATE ACTIVITY\n<br>" +
				"You will immediately give Company all such assistance as is required and provide us with all such information as is requested by Company to monitor your activity under the Affiliate Program.\n<br>" +
				"<br>2.17 COMMISSIONS PAID INCORRECTLY\n<br>" +
				"The Affiliate agrees to immediately upon request by Company, return all Commissions received based on New Customers referred to Company in breach of the Affiliate Agreement or relating to fraudulent or falsified transactions.\n<br>" +
				"<br><b>3. AFFILIATE RIGHTS</b>\n<br>" +
				"3.1. RIGHT TO DIRECT NEW CUSTOMERS\n<br>" +
				"We grant you the non-exclusive, non-assignable, right, during the term of this Affiliate Agreement, to direct New Customers to such Company Websites as we have agreed with you in strict accordance with the terms of the Affiliate Agreement. You shall have no claim to Commission or other compensation on business secured by persons or entities other than you.\n<br>" +
				"<br>3.2. LICENCE TO USE COMPANY INTELLECTUAL PROPERTY RIGHTS\n<br>" +
				"We grant to you a non-exclusive, non-transferable licence, during the term of this Affiliate Agreement, to use the Company Intellectual Property Rights, which we may from time to time approve solely in connection with the display of the promotional materials on the Affiliate Website or in other such locations as may have been expressly approved (in writing) by Company. This licence cannot be sub-licensed, assigned or otherwise transferred by you.\n<br>" +
				"<br>3.3. PLAYERS’ PERSONAL DATA\n<br>" +
				"For the purpose of the services delivered under this Agreement, it is understood that the Affiliate shall not have access to any Personal Data of Company’s customers.\n<br>" +
				"<br><b>4. COMPANY OBLIGATIONS</b>\n<br>" +
				"4.1. We shall use our best efforts to provide you with all materials and information required for necessary implementation of the Affiliate Links.\n<br>" +
				"<br>4.2. At our sole discretion, we will register any New Customers directed to the Company Websites by you and we will track their transactions. We reserve the right to refuse New Customers (or to close their accounts) if necessary to comply with any requirements we may periodically establish.\n<br>" +
				"<br>4.3. We shall make available monitoring tools which enable you to monitor your Affiliate Account and the level of your Commission and the payment thereof.\n<br>" +
				"<br>4.4. We shall use and process the following personal data of an Affiliate or any Affiliate employee, as follows: your username for logging in, your email address, name, date of birth, your country and address, telephone number and financial data for the purposes of ensuring a high level of security, fulfilling the AML legal requirements and for managing our business relationship.\n<br>" +
				"<br>4.5. Subject to your strict adherence to the Affiliate Agreement, we shall pay you the Commission in accordance with Clause 6.\n<br>" +
				"<br><b>5. COMPANY RIGHTS AND REMEDIES</b>\n<br>" +
				"In the case of your breach (or, where relevant, suspected breach) of this Agreement or your negligence in performance under the Affiliate Program, or failure to meet your obligations hereunder, the Company shall have the following remedies available:\n<br>" +
				"a) the right to suspend your participation in the Affiliate Program for the period required to investigate any activities that may be in breach of the Affiliate Agreement. During such period of suspension payment of Commissions will also be suspended;\n<br>" +
				"b) the right to withhold any Commission or any other payment to the Affiliate arising from or relating to any specific campaign, traffic, content or activity conducted or created by the Affiliate which is in breach of the Affiliate’s obligations under the Affiliate Agreement;\n<br>" +
				"c) the right to withhold from the Commission monies which Company deems reasonable to cover any indemnity given by the Affiliate hereunder or to cover any liability of Company which arises as a result of the Affiliate’s breach of the Affiliate Agreement;\n<br>" +
				"d) immediately terminate the Affiliate Agreement;\n<br>" +
				"e) the right to withhold monies held in the Affiliate Wallet if they are not withdrawn within a period of 3 (three) months from the date of the termination of the Affiliate Agreement in accordance with clause 9.1.\n<br>" +
				"Our rights and remedies detailed above shall not be mutually exclusive.\n<br>" +
				"<br><b>6. COMMISSION AND PAYMENT</b>\n<br>" +
				"6.1. Subject to your adherence to the provisions of the Affiliate Agreement, you will earn Commission in accordance with the Commission Structure. We retain the right to change the Commission percentage and method of calculation of Commission in accordance with this clause.\n<br>" +
				"<br>6.2 The Commission is calculated at the end of each month and payments shall be made on a monthly basis in arrears, not later than the 10th of the following calendar month.\n<br>" +
				"<br>6.3. Payment of Commission will be made through our Affiliate Wallet. Due to existing regulations, Affiliates may be required for verification and “know your customer” documentation before a withdrawal can be accessed.\n<br>" +
				"<br>6.4. A minimum amount of €20 (twenty euro) may be withdrawn from the Affiliate Wallet at one time.\n<br>" +
				"<br>6.5. If an error is made in the calculation of the Commission, the Company has the right to correct such calculation at any time and will immediately pay out underpayment or reclaim overpayment made to the Affiliate.\n<br>" +
				"<br>6.6. The Affiliate may, at the Company’s sole discretion, be provided with the opportunity to restructure its commission structure.\n<br>" +
				"<br>6.7. The Affiliate’s acceptance of a Commission payment shall constitute the full and final settlement of the balance due for the relevant period. In case the Affiliate disagrees with the balance due as reported, he or she shall notify the Company within fourteen (14) calendar days and clearly state reasons of the disagreement. Failure to notify the Company within this time limit shall be considered as an irrevocable acknowledgment of the balance due for the relevant period.\n<br>" +
				"<br>6.8. The Commission shall be deemed to be exclusive of value added tax or any other applicable tax. The Affiliate shall have the sole responsibility to pay any and all taxes, levies, charges and any other money payable or due to any tax authority, department or other competent entity as a result of the compensation generated under the Affiliate Agreement.\n<br>" +
				"<br>6.9. Please note that under the Malta License for German traffic and Irish traffic, VAT is deducted at 19% and 23% respectively. This VAT will be included in the deal.\n<br>" +
				"<br>6.10 In case of partnership on Hybrid and CPA basis there are several stipulations that should be taken into account:\n<br>" +
				"Negative Revenue Share will be deducted from CPA part of the commission. This stipulation takes effect unless otherwise agreed with the affiliate manager beforehand.\n<br>" +
				"Duplicate accounts and self-excluded players will be deducted from CPA part of the Commission. This stipulation takes effect unless alternative was discussed with affiliate manager beforehand.\n<br>" +
				"In cases certain CAP was negotiated with a partner commission will be paid only for the negotiated number of FTDs.\n<br>" +
				"<br>6.11 Available payment methods.\n<br>" +
				"Within affiliate program of Enchant Affiliates affiliates can withdraw their commission funds using the following payment methods:\n<br>" +
				"Skrill\n<br>" +
				"Neteller\n<br>" +
				"Bank Transfer\n<br>" +
				"Coinspaid\n<br>" +
				"<br><b>7. STANDARD COMMISSION STRUCTURES</b>\n<br>" +
				"30% if monthly NGR is equal or below 5,000 EUR;\n<br>" +
				"35% if monthly NGR is between 5,000 EUR and 10,000 EUR;\n<br>" +
				"45% if monthly NGR is between 10,000 EUR and 20,000 EUR;\n<br>" +
				"50% if monthly NGR is more than 20,000 EUR\n<br>" +
				"<br><b>8. CONFIDENTIAL INFORMATION</b>\n<br>" +
				"During the term of the Affiliate Agreement, you may from time to time be entrusted with confidential information relating to our business, operations, or underlying technology and/or the Affiliate Program (including, for example, the Commissions earned by you under the Affiliate Program).\n<br>" +
				"You agree to avoid disclosure or unauthorised use of any such confidential information to third persons or outside parties unless you have our prior written consent. You also agree that you will use the confidential information only for the purposes of the Affiliate Agreement. Your obligations in regards to this clause survive the termination of this Agreement.\n<br>" +
				"In addition, you must not issue any press release or similar communication to the public with respect to your participation in the Affiliate Program without the prior written consent of the Company (with approval of the exact content to also be approved by Company).\n<br>" +
				"<br><b>9. TERM AND TERMINATION</b>\n<br>" +
				"9.1. REASON FOR TERMINATION \n<br>" +
				"The term of the Affiliate Agreement will begin when you are approved as an Affiliate and will be continuous unless and until either Party notifies the other in writing that it wishes to terminate the Agreement. In this case the Agreement will be terminated 30 days after such notice is given. For purposes of notification of termination, delivery via e-mail is considered a written and immediate form of notification.\n<br>" +
				"For the avoidance of doubt, Company may also terminate (in accordance with Clause 5 above) upon immediate notice at any time for the Affiliates failure to meet their obligations under the Agreement or otherwise for the Affiliate’s negligence.\n<br>" +
				"Spamming, violation of advertising rules, fraud, attracting poor-quality traffic that does not meet the requirements of the casino, the systematic involvement of players from banned countries.\n<br>" +
				"<br>9.2. AFFILIATE ACTIONS UPON TERMINATION\n<br>" +
				"Upon termination you must immediately remove all of Company banners or creatives from the Affiliate Website and disable all Affiliate Links from the Affiliate Website to all Company Websites.\n<br>" +
				"All rights and licenses given to you in the Affiliate Agreement shall immediately terminate.\n<br>" +
				"You will return to Company any confidential information and all copies of it in your possession and control, and will cease all uses of all Company Intellectual Property Rights.\n<br>" +
				"<br>9.3. COMMISSION\n<br>" +
				"Upon termination of the Affiliate Agreement for any reason, all Commission relating to any New Customers directed to Company during the term shall not be payable to the Affiliate as from the date of termination.\n<br>" +
				"<br><b>10. MISCELLANEOUS</b>\n<br>" +
				"10.1. DISCLAIMER\n<br>" +
				"We make no express or implied warranties or representations with respect to the Affiliate Program, about Company or the Commission payment arrangements (including, without limitation, functionality, warranties of fitness, merchantability, legality or non-infringement). In addition, we make no representation that the operation of our sites will be uninterrupted or error-free and will not be liable for the consequences if there are any. In the event of a discrepancy between the reports offered in the Affiliate Account system and the Company database, the database shall be deemed accurate.\n<br>" +
				"<br>10.2. INDEMNITY AND LIMITATION OF LIABILITY\n<br>" +
				"You shall indemnify and hold Company, our directors, employees and representatives harmless from and against any and all liabilities, losses, damages and costs, including legal fees, resulting from or in any way connected with (a) any breach by you of any provision of the Affiliate Agreement, (b) the performance of your duties and obligations under the Affiliate Agreement, (c) your negligence or (d) any injury caused directly or indirectly by your negligent or intentional acts or omissions, or the unauthorised use of our creatives and links or this Affiliate Program.\n<br>" +
				"The Company shall not be held liable for any direct or indirect, special, or consequential damages (or any loss of revenue, profits, or data), any loss of goodwill or reputation arising in connection with the Affiliate Agreement or the Affiliate Program, even if we have been advised of the possibility of such damages.\n<br>" +
				"<br>10.3. NON-WAIVER\n<br>" +
				"Our failure to enforce your strict performance of any provision of the Affiliate Agreement will not constitute a waiver of our right to subsequently enforce such provision or any other provision of the Affiliate Agreement.\n<br>" +
				"<br>10.4. RELATIONSHIP OF PARTIES\n<br>" +
				"The Company and the Affiliate are independent contractors and nothing in the Affiliate Agreement will create any partnership, joint venture, agency, franchise, sales representative, or employment relationship between us. You will have no authority to make or accept any offers or representations on our behalf. You will not make any statement, whether on your site or otherwise, that would contradict anything in this Affiliate Agreement.\n<br>" +
				"<br>10.5. FORCE MAJEURE\n<br>" +
				"Neither party shall be liable to the other for any delay or failure to perform its obligations under the Affiliate Agreement if such delay or failure arises from a cause beyond its reasonable control, including but not limited to labour disputes, strikes, industrial disturbances, acts of God, acts of terrorism, floods, lightning, utility or communications failures, earthquakes or other casualty. If such event occurs, the non-performing Party is excused from whatever performance is prevented by the event to the extent prevented provided that if the force majeure event subsists for a period exceeding thirty (30) calendar days then either Party may terminate the Affiliate Agreement with immediate effect by providing a written notice.\n<br>" +
				"<br>10.6. ASSIGNABILITY\n<br>" +
				"You may not assign the Affiliate Agreement, by operation of law or otherwise, without our prior written consent.\n<br>" +
				"<br>10.7. SEVERABILITY\n<br>" +
				"If any provision of the Affiliate Agreement is held to be invalid, illegal or unenforceable in any respect, such provision will be ineffective only to the extent of such invalidity, or unenforceability, without invalidating the remainder of the Affiliate Agreement or any provision hereof.\n<br>" +
				"<br>10.8. ENGLISH LANGUAGE\n<br>" +
				"The Affiliate Agreement was first drafted in English. Should there be any conflict or discrepancy between the English language version and any other language, the English version shall prevail.\n<br>" +
				"<br>10.9. MODIFICATION OF TERMS & CONDITIONS\n<br>" +
				"We may modify any of the terms and conditions contained in the Affiliate Agreement or replace it at any time and in our sole discretion by posting a change notice or a new agreement on our site. Modifications may include, for example, changes in the scope of available Commissions and Affiliate Program rules. Affiliates will be e-mailed with any term modifications.\n<br>" +
				"If any modification is unacceptable to you, your need to terminate the Affiliate Agreement. Your continued participation in our Affiliate Program following our posting of a change notice or new agreement will constitute binding acceptance of the modification or of the new agreement. Affiliates will be e-mailed with any term modifications.\n<br>" +
				"\n<br>",
			okButton: "OK",
			callback: function(value) {
				if (value) {

				} else {

				}
			}
		});
	});
});
