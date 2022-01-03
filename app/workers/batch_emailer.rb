class BatchEmailer
  include Sidekiq::Worker
  def perform(params)
  	10.times{p "Processing batch emails"}
  end
end
#Batched event emails here