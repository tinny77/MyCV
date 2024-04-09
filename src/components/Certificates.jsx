const Certificates = (props) => {
     if (props.hidden) {
          return null;
      }
          return (<p className='certificates'>
                    <a href='#' target='_blank' rel='noindex nofollow'><img src='https://i0.wp.com/knowledge-pillars.com/wp-content/uploads/2022/12/WordPress-Developer.png?w=512&ssl=1' alt='Certified WordPress Developer' title='Certified WordPress Developer' /><span className='sr-only'>Certified WordPress Developer</span></a>
                    <a href='#' target='_blank' rel='noindex nofollow'><img src='https://i0.wp.com/knowledge-pillars.com/wp-content/uploads/2023/02/Knowledge-Pillars-Badges-2022-12-14-PROOF_WP-WooCommerce-Specialist.png?w=2134&ssl=1' alt='Certified WooCommerce Specialist' title='Certified WooCommerce Specialist' /><span className='sr-only'>Certified WooCommerce Specialist</span></a>
               </p>
          );
};

export default Certificates;
